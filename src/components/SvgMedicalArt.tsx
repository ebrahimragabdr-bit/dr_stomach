import React from 'react';

interface StomachMascotProps {
  mood?: 'smirk' | 'happy' | 'shocked' | 'boss';
  size?: number;
  className?: string;
}

export const StomachMascotSvg: React.FC<StomachMascotProps> = ({
  mood = 'smirk',
  size = 180,
  className = '',
}) => {
  const primaryColor = mood === 'shocked' ? '#EF4444' : mood === 'happy' ? '#00F5D4' : '#FF4D6D';
  const secondaryColor = mood === 'happy' ? '#10B981' : '#FF9E00';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Dr. Stomach Organ Mascot"
    >
      <defs>
        <radialGradient id="stomachGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0A1128" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="stomachBody" x1="35" y1="30" x2="185" y2="195" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="65%" stopColor="#E63956" />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
        <linearGradient id="acidPool" x1="65" y1="125" x2="150" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD166" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FF9E00" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Ambient Aura */}
      <circle cx="110" cy="115" r="95" fill="url(#stomachGlow)" />

      {/* Esophagus entry + Stomach + Duodenal C-loop */}
      <path
        d="M95 22 C96 42, 92 52, 82 58 C56 68, 42 102, 52 138 C62 174, 102 188, 134 176 C158 166, 174 146, 184 134 C194 122, 198 136, 190 156 C183 172, 166 184, 152 184"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main Stomach Silhouette */}
      <path
        d="M84 26 L108 26 L106 54 C118 46, 146 46, 160 66 C174 88, 160 116, 136 122 C126 124, 128 136, 140 140 C158 144, 176 130, 186 122 L194 140 C178 164, 148 186, 106 184 C64 182, 38 148, 44 102 C48 72, 66 56, 84 54 Z"
        fill="url(#stomachBody)"
        stroke="#FFE5EC"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Gastric Rugae & Acid Pool */}
      <path
        d="M60 128 C78 134, 112 130, 140 144 C132 166, 108 176, 86 170 C66 164, 56 146, 60 128 Z"
        fill="url(#acidPool)"
        opacity="0.72"
      />
      <circle cx="84" cy="150" r="4" fill="#FFF8E7" opacity="0.85" />
      <circle cx="102" cy="144" r="3" fill="#FFF8E7" opacity="0.75" />
      <circle cx="116" cy="156" r="2.5" fill="#FFF8E7" opacity="0.8" />

      {/* Incisura Angularis Notch Highlight */}
      <path
        d="M124 115 Q134 123 130 133"
        stroke="#00F5D4"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Eyes & Expression */}
      {mood === 'shocked' ? (
        <>
          <circle cx="88" cy="95" r="8" fill="#FFFFFF" />
          <circle cx="122" cy="95" r="8" fill="#FFFFFF" />
          <circle cx="88" cy="95" r="3" fill="#0A1128" />
          <circle cx="122" cy="95" r="3" fill="#0A1128" />
          <ellipse cx="105" cy="116" rx="9" ry="7" fill="#0A1128" />
        </>
      ) : mood === 'happy' ? (
        <>
          <path d="M80 96 Q88 86 96 96" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M114 96 Q122 86 130 96" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M90 112 Q105 126 122 112" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          {/* Smart sarcastic smirk */}
          <ellipse cx="88" cy="95" rx="7" ry="8" fill="#FFFFFF" />
          <ellipse cx="122" cy="95" rx="7" ry="8" fill="#FFFFFF" />
          <circle cx="90" cy="95" r="3.5" fill="#0A1128" />
          <circle cx="124" cy="95" r="3.5" fill="#0A1128" />
          <path d="M78 82 L98 86" stroke="#FFE5EC" strokeWidth="3" strokeLinecap="round" />
          <path d="M113 86 L133 81" stroke="#FFE5EC" strokeWidth="3" strokeLinecap="round" />
          <path d="M92 114 Q108 122 122 110" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* Surgical Stethoscope / Head Mirror Accent */}
      {mood === 'boss' ? (
        <path d="M78 46 L86 24 L102 36 L116 20 L126 38 L138 28 L134 48 Z" fill="#FFD166" stroke="#0A1128" strokeWidth="2" />
      ) : (
        <g>
          <circle cx="105" cy="63" r="10" fill="#00F5D4" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="105" cy="63" r="4" fill="#0A1128" />
        </g>
      )}
    </svg>
  );
};

interface RadiologySvgProps {
  type: 'trifoliate' | 'soupdish' | 'hourglass' | 'pneumoperitoneum';
}

export const RadiologyDiagramSvg: React.FC<RadiologySvgProps> = ({ type }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#040914] border border-cyan-400/25 p-4 flex flex-col items-center justify-center">
      <svg viewBox="0 0 280 220" className="w-full max-w-[280px] h-auto" role="img" aria-label={type}>
        <defs>
          <radialGradient id="xrayBg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#192847" />
            <stop offset="100%" stopColor="#040812" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="280" height="220" rx="14" fill="url(#xrayBg)" />

        {/* Subtle vertebral shadow */}
        <g opacity="0.18" fill="#E2E8F0">
          {[20, 52, 84, 116, 148, 180].map((y) => (
            <rect key={y} x="122" y={y} width="36" height="24" rx="4" />
          ))}
        </g>

        {type === 'trifoliate' && (
          <g>
            {/* Antrum leading to deformed clover-leaf duodenal bulb */}
            <path
              d="M60 155 C85 155, 108 130, 128 115"
              stroke="#E2E8F0"
              strokeWidth="22"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
            {/* Clover-leaf (3-lobed) scarred duodenal cap */}
            <g transform="translate(155, 95)">
              <circle cx="-12" cy="-14" r="18" fill="#F8FAFC" opacity="0.92" />
              <circle cx="16" cy="-10" r="17" fill="#F8FAFC" opacity="0.92" />
              <circle cx="4" cy="14" r="18" fill="#F8FAFC" opacity="0.92" />
              <circle cx="2" cy="0" r="9" fill="#CBD5E1" />
              {/* Scarring constriction lines */}
              <path d="M-24 2 L-4 2 M2 -26 L2 -6 M24 4 L8 4" stroke="#FF4D6D" strokeWidth="2.5" strokeDasharray="3 2" />
            </g>
            <text x="140" y="198" textAnchor="middle" fill="#00F5D4" fontSize="11" fontFamily="Plus Jakarta Sans">
              Trifoliate / Clover-Leaf Deformity
            </text>
          </g>
        )}

        {type === 'soupdish' && (
          <g>
            {/* Huge J-shaped stomach dropping to pelvis */}
            <path
              d="M115 24 L115 70 C85 88, 65 140, 82 178 C98 202, 165 204, 194 176 C214 156, 206 118, 178 122 C164 124, 160 144, 146 146 C126 148, 128 110, 128 70"
              fill="rgba(241, 245, 249, 0.85)"
              stroke="#94A3B8"
              strokeWidth="2"
            />
            {/* Retained food/fluid level */}
            <path d="M77 148 L203 148 C202 178, 172 198, 138 198 C100 198, 78 175, 77 148 Z" fill="#FFFFFF" />
            <line x1="77" y1="148" x2="203" y2="148" stroke="#FFD166" strokeWidth="2.5" strokeDasharray="5 3" />
            <text x="140" y="212" textAnchor="middle" fill="#00F5D4" fontSize="11" fontFamily="Plus Jakarta Sans">
              Dilated Soup-Dish Stomach (Pelvis Level)
            </text>
          </g>
        )}

        {type === 'hourglass' && (
          <g>
            {/* Upper pouch */}
            <ellipse cx="122" cy="70" rx="44" ry="34" fill="#F1F5F9" opacity="0.9" />
            {/* Narrow waist constriction from saddle ulcer */}
            <rect x="114" y="96" width="16" height="28" rx="4" fill="#F1F5F9" opacity="0.92" />
            <path d="M88 110 L112 110" stroke="#FF4D6D" strokeWidth="3" />
            <circle cx="85" cy="110" r="5" fill="#FF4D6D" />
            {/* Lower pouch */}
            <ellipse cx="132" cy="154" rx="48" ry="34" fill="#F1F5F9" opacity="0.9" />
            <text x="140" y="208" textAnchor="middle" fill="#00F5D4" fontSize="11" fontFamily="Plus Jakarta Sans">
              Hourglass Stomach (Saddle Ulcer Fibrosis)
            </text>
          </g>
        )}

        {type === 'pneumoperitoneum' && (
          <g>
            {/* Lung fields */}
            <path d="M54 32 C38 65, 36 115, 44 134 L126 130 L124 34 Z" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            <path d="M226 32 C242 65, 244 115, 236 134 L154 130 L156 34 Z" fill="#0F172A" stroke="#475569" strokeWidth="1.5" />
            {/* Diaphragm domes */}
            <path d="M40 144 Q84 108 130 136" stroke="#E2E8F0" strokeWidth="4" fill="none" />
            <path d="M150 136 Q196 112 240 144" stroke="#E2E8F0" strokeWidth="4" fill="none" />
            {/* Crescent of free air under right hemidiaphragm */}
            <path d="M46 142 Q84 114 124 137 Q84 128 46 142 Z" fill="#00F5D4" opacity="0.9" />
            {/* Liver shadow */}
            <path d="M44 146 Q84 124 126 144 L126 190 L44 190 Z" fill="#334155" opacity="0.85" />
            <text x="140" y="208" textAnchor="middle" fill="#FFD166" fontSize="11" fontFamily="Plus Jakarta Sans">
              Free Air Crescent Under Right Diaphragm
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
