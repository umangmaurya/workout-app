import React from 'react';
import { Exercise } from '../types';

interface CollapsibleSectionProps {
  title: string;
  icon: string;
  items: Exercise[];
  isOpen: boolean;
  onToggle: () => void;
  bgColor: string;
  borderColor: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  items,
  isOpen,
  onToggle,
  bgColor,
  borderColor,
}) => {
  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? bgColor : 'bg-white/5'}`}>
      <button
        onClick={onToggle}
        className={`w-full px-3 py-2.5 flex items-center justify-between transition-colors ${isOpen ? '' : 'hover:bg-white/10'}`}
      >
        <span className="font-medium text-sm flex items-center gap-2">
          <span>{icon}</span>
          <span>{title}</span>
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-3 pb-3 space-y-1.5 border-t ${borderColor}`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-black/20 rounded-lg p-2.5 flex items-center justify-between mt-1.5"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{item.name}</p>
                <p className="text-xs text-gray-300">{item.sets}</p>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex-shrink-0 bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <span>▶️</span>
                <span>Form</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
