import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export type LanguageCode = 'fr' | 'en' | 'ar';

interface LanguageSelectorProps {
  currentLang?: LanguageCode;
  onChange?: (lang: LanguageCode) => void;
}

const languages: { code: LanguageCode; label: string; flag: string }[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦' }
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang = 'fr',
  onChange
}) => {
  const [selected, setSelected] = useState<LanguageCode>(currentLang);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find((l) => l.code === selected) || languages[0];

  const handleSelect = (code: LanguageCode) => {
    setSelected(code);
    if (onChange) onChange(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-navy border border-border bg-white hover:bg-slate-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-navy/20"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4 text-teal" />
        <span>{selectedLang.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-card border border-border py-1 z-50 animate-slide-up">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-sm transition-colors ${
                selected === lang.code
                  ? 'bg-teal-50 text-teal-800 font-semibold'
                  : 'text-foreground hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
              {selected === lang.code && <Check className="w-4 h-4 text-teal" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
