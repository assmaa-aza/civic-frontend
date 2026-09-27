import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'dark' | 'standalone' | 'monochrome';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  showSubtitle = true,
  className = '',
  size = 'md'
}) => {
  const isDark = variant === 'dark';
  
  const sizeClasses = {
    sm: { height: 32, textClass: 'text-lg', subClass: 'text-[9px]' },
    md: { height: 42, textClass: 'text-2xl', subClass: 'text-[11px]' },
    lg: { height: 56, textClass: 'text-3xl', subClass: 'text-[13px]' },
  }[size];

  return (
    <Link to="/" classname={`inline-flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}>
      {/* Visual Icon Mark matching CivicPilot brand identity */}
      <svg
        width={sizeClasses.height * 1.1}
        height={sizeClasses.height}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Teal Curved Pathway */}
        <path
          d="M15 95 C 45 92, 55 60, 68 35 L 85 45 C 68 70, 52 95, 25 98 Z"
          fill={variant === 'monochrome' ? (isDark ? '#FFFFFF' : '#172033') : '#00B894'}
        />
        
        {/* Navy Human Figure Reaching Up */}
        <path
          d="M20 78 C 30 50, 48 20, 75 10 C 72 24, 60 48, 42 70 C 35 78, 28 82, 20 78 Z"
          fill={variant === 'monochrome' ? (isDark ? '#FFFFFF' : '#172033') : (isDark ? '#FFFFFF' : '#003366')}
        />
        {/* Head */}
        <circle
          cx="62"
          cy="18"
          r="9"
          fill={variant === 'monochrome' ? (isDark ? '#FFFFFF' : '#172033') : (isDark ? '#FFFFFF' : '#003366')}
        />
        
        {/* Gold Door/Pillar */}
        <path
          d="M80 32 L95 28 L95 90 L80 90 Z"
          fill={variant === 'monochrome' ? (isDark ? '#FFFFFF' : '#172033') : '#F4B942'}
        />

        {/* 4-Pointed Sparkle Star atop Gold Pillar */}
        <path
          d="M87.5 12 C 87.5 18, 87.5 22, 94 22 C 87.5 22, 87.5 26, 87.5 32 C 87.5 26, 87.5 22, 81 22 C 87.5 22, 87.5 18, 87.5 12 Z"
          fill={variant === 'monochrome' ? (isDark ? '#FFFFFF' : '#172033') : '#F4B942'}
        />
      </svg>

      {/* Brand Typography */}
      {variant !== 'standalone' && (
        <div className="flex flex-col">
          <div className={`font-bold tracking-tight leading-none ${sizeClasses.textClass}`}>
            <span className={isDark ? 'text-white' : 'text-navy'}>Civic</span>
            <span className={isDark ? 'text-teal-400' : 'text-teal font-extrabold'}>Pilot</span>
          </div>
          {showSubtitle && (
            <span className={`tracking-wider font-medium mt-1 uppercase ${sizeClasses.subClass} ${isDark ? 'text-teal-100/80' : 'text-navy-600/80'}`}>
              Your path to financial opportunity
            </span>
          )}
        </div>
      )}
    </Link>
  );
};
