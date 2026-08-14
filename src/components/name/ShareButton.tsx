'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonProps {
  name: string;
  meaning: string;
  slug: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ name, meaning, slug }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/name/${slug}` : `https://namemeaning.fun/name/${slug}`;
    const text = `Did you know? The name ${name} means "${meaning}". Discover more at NameMeaning.fun: ${url}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Meaning of ${name}`,
          text: text,
          url: url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy share link:', err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition-colors border border-zinc-200"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-700">Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-zinc-500" />
          <span>Share Name</span>
        </>
      )}
    </button>
  );
};
