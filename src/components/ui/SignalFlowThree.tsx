import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 200;
const PATH_LENGTH = 6;

// Signal colors as Three.js Color objects
const signalColors = [
  new THREE.Color("#F5A524"), // raw/amber
  new THREE.Color("#3B82F6"), // process/blue
  new THREE.Color("#A855F7"), // transform/violet
  new THREE.Color("#22D3EE"), // output/cyan
];

function lerp3Colors(colors: THREE.Color[], t: number): THREE.Color {
  const clampedT = Math.max(0, Math.min(1, t));
  const segment = clampedT * (colors.length - 1);
  const idx = Math.floor(segment);
  const frac = segment - idx;
  const c1 = colors[Math.min(idx, colors.length - 1)];
  const c2 = colors[Math.min(idx + 1, colors.length - 1)];
  return new THREE.Color().lerpColors(c1, c2, frac);
}

/* Branching path control points */
function getPathPoints() {
  const mainPath = [
    new THREE.Vector3(-4, 0, 0),
    new THREE.Vector3(-2.5, 0.5, 0.3),
    new THREE.Vector3(-1, -0.3, -0.2),
    new THREE.Vector3(0.5, 0.4, 0.5),
    new THREE.Vector3(2, -0.2, -0.3),
    new THREE.Vector3(3.5, 0.3, 0.1),
    new THREE.Vector3(4.5, 0, 0),
  ];
  return new THREE.CatmullRomCurve3(mainPath, false, "centripetal", 0.5);
}

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const curve = useMemo(() => getPathPoints(), []);

  // Initialize particle data
  const particleData = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      offset: (i / PARTICLE_COUNT) * PATH_LENGTH,
      speed: 0.15 + Math.random() * 0.2,
      lateralOffset: (Math.random() - 0.5) * 0.6,
      verticalOffset: (Math.random() - 0.5) * 0.4,
      scale: 0.015 + Math.random() * 0.025,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colorArray = useMemo(
    () => new Float32Array(PARTICLE_COUNT * 3),
    []
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particleData[i];
      const t = ((time * p.speed + p.offset) % PATH_LENGTH) / PATH_LENGTH;

      const pos = curve.getPoint(t);
      const wobbleX = Math.sin(time * 1.5 + p.phase) * p.lateralOffset * 0.3;
      const wobbleY = Math.cos(time * 2 + p.phase) * p.verticalOffset * 0.3;

      dummy.position.set(
        pos.x + p.lateralOffset + wobbleX,
        pos.y + p.verticalOffset + wobbleY,
        pos.z + (Math.random() - 0.5) * 0.05
      );

      // Pulse scale
      const pulse = 1 + Math.sin(time * 3 + p.phase) * 0.3;
      dummy.scale.setScalar(p.scale * pulse);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Color based on position along path (signal gradient)
      const color = lerp3Colors(signalColors, t);
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }

    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update instance colors
    const colorAttr = meshRef.current.geometry.getAttribute("color");
    if (colorAttr) {
      (colorAttr as THREE.BufferAttribute).set(colorArray);
      colorAttr.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 8]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colorArray, 3]}
        />
      </sphereGeometry>
      <meshBasicMaterial vertexColors transparent opacity={0.85} />
    </instancedMesh>
  );
}

/* Glowing path line */
function PathLine() {
  const curve = useMemo(() => getPathPoints(), []);
  const points = useMemo(() => curve.getPoints(100), [curve]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const colors = new Float32Array(points.length * 3);
    for (let i = 0; i < points.length; i++) {
      const t = i / (points.length - 1);
      const color = lerp3Colors(signalColors, t);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [points]);

  return (
    <line>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial vertexColors transparent opacity={0.15} />
    </line>
  );
}

/* Node markers at key positions */
function PathNodes() {
  const curve = useMemo(() => getPathPoints(), []);

  const nodes = useMemo(() => {
    return [0, 0.25, 0.5, 0.75, 1].map((t, i) => ({
      position: curve.getPoint(t),
      color: lerp3Colors(
        signalColors,
        t
      ),
      scale: i === 0 || i === 4 ? 0.08 : 0.06,
    }));
  }, [curve]);

  return (
    <>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.scale, 16, 16]} />
          <meshBasicMaterial
            color={node.color}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}

export default function SignalFlowThree() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={Math.min(window.devicePixelRatio, 1.5)}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <Particles />
      <PathLine />
      <PathNodes />
    </Canvas>
  );
}
