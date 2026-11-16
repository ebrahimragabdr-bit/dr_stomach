import React from 'react';
import { formatMedicalTextParts } from '../utils/gameLogic';

interface MedicalTextProps {
  text: string;
  className?: string;
}

export const MedicalText: React.FC<MedicalTextProps> = ({ text, className = '' }) => {
  const parts = formatMedicalTextParts(text);
  return (
    <span className={className}>
      {parts.map((part, idx) =>
        part.type === 'en' ? (
          <span key={idx} className="med-term">
            {part.value}
          </span>
        ) : (
          <React.Fragment key={idx}>{part.value}</React.Fragment>
        )
      )}
    </span>
  );
};
