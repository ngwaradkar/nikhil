import { siteConfig } from "../../data/portfolio-data";

const signalColors = ["#F59E0B", "#3B82F6", "#06B6D4", "#10B981"];

export const TrustStrip: React.FC = () => {
  const items = [...siteConfig.trustItems, ...siteConfig.trustItems];

  return (
    <div className="w-full overflow-hidden bg-[#050505] border-y border-white/5 py-4 relative z-10 select-none">
      <div className="flex items-center gap-10 whitespace-nowrap animate-[marquee_40s_linear_infinite] w-max">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 text-xs font-mono text-[#8B98AC] tracking-widest uppercase"
          >
            <span className="flex items-center gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: signalColors[idx % signalColors.length] }}
              />
              <span className="text-[#F1F5F9]/90 font-medium">{item}</span>
            </span>
            <span className="text-white/20">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
