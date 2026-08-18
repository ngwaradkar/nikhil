import React from 'react';
import { siteConfig } from '../../data/portfolio-data';

const signalColors = ['#F5A524', '#3B82F6', '#A855F7', '#22D3EE'];

export const TrustStrip: React.FC = () => {
  const items = [...siteConfig.trustItems, ...siteConfig.trustItems];

  return (
    <div className="w-full overflow-hidden bg-[#0A0E17] border-y border-white/5 py-4 relative z-10">
      <div className="flex items-center gap-10 whitespace-nowrap animate-[marquee_40s_linear_infinite] w-max">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-mono text-text-secondary tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: signalColors[idx % 4] }}
              />
              {item}
            </span>
            <span className="text-white/20">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
