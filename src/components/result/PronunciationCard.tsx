'use client';

import React, { useState } from 'react';
import { NameAnalysis } from '@/types/name';
import { Volume2, VolumeX, Mic } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

interface Props {
  data: NameAnalysis;
}

export const PronunciationCard: React.FC<Props> = ({ data }) => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const speakName = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported on this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = data.pronunciation?.audio_script || data.pronunciation?.simple || data.name;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.9;
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-xs space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Pronunciation
            </h2>
            <p className="text-xs text-slate-400">
              Phonetic breakdown and voice synthesis
            </p>
          </div>
        </div>

        <button
          onClick={speakName}
          disabled={isPlaying}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all active:scale-95 disabled:opacity-50"
        >
          {isPlaying ? (
            <>
              <VolumeX className="w-4 h-4 animate-pulse" />
              <span>Playing...</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" />
              <span>{t.listenPronunciation}</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Phonetic Breakdown
          </span>
          <p className="text-lg font-bold text-blue-700 font-mono">
            {data.pronunciation?.simple || data.name}
          </p>
        </div>

        {data.pronunciation?.ipa && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              IPA
            </span>
            <p className="text-lg font-bold text-slate-800 font-mono">
              {data.pronunciation.ipa}
            </p>
          </div>
        )}

        {data.pronunciation?.original_script && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Original Script
            </span>
            <p className="text-xl font-bold text-emerald-700">
              {data.pronunciation.original_script}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
