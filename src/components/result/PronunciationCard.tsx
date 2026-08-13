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
    const textToSpeak = data.pronunciation?.audio_script || data.name;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.9;
    
    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Pronunciation
            </h2>
            <p className="text-xs text-slate-400">
              Phonetic breakdown and interactive audio synthesis
            </p>
          </div>
        </div>

        <button
          onClick={speakName}
          disabled={isPlaying}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
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
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Phonetic Breakdown
          </span>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400 font-mono">
            {data.pronunciation?.simple || data.name}
          </p>
        </div>

        {data.pronunciation?.ipa && (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              International Phonetic Alphabet (IPA)
            </span>
            <p className="text-lg font-bold text-slate-800 dark:text-slate-200 font-mono">
              {data.pronunciation.ipa}
            </p>
          </div>
        )}

        {data.pronunciation?.original_script && (
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Original Script
            </span>
            <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              {data.pronunciation.original_script}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
