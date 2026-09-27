import React from 'react';
import { Sparkles, User } from 'lucide-react';

export interface ChatMessageProps {
  sender: 'ai' | 'user';
  content: string;
  timestamp?: string;
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  content,
  timestamp,
  className = ''
}) => {
  const isAi = sender === 'ai';

  return (
    <div className={`flex items-start gap-3.5 mb-5 animate-slide-up ${isAi ? '' : 'flex-row-reverse'} ${className}`}>
      {/* Avatar */}
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
          isAi
            ? 'bg-navy text-teal border border-navy-400'
            : 'bg-teal text-white border border-teal-600'
        }`}
      >
        {isAi ? <Sparkles className="w-5 h-5 text-teal" /> : <User className="w-5 h-5" />}
      </div>

      {/* Bubble */}
      <div className={`max-w-[85%] sm:max-w-[75%] space-y-1 ${isAi ? 'items-start' : 'items-end'}`}>
        <div className="flex items-center gap-2 px-1">
          <span className="text-xs font-bold text-navy-800">
            {isAi ? 'CivicPilot Navigator' : 'You'}
          </span>
          {timestamp && <span className="text-[11px] text-muted">{timestamp}</span>}
        </div>

        <div
          className={`px-4 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
            isAi
              ? 'bg-white border border-border text-foreground rounded-tl-xs'
              : 'bg-navy text-white rounded-tr-xs font-medium'
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
