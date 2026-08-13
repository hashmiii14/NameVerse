'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { isFavorite, toggleFavorite } from '@/lib/utils/storage';

interface FavoriteButtonProps {
  name: string;
  slug: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ name, slug }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(slug));
  }, [slug]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleFavorite(name, slug);
    setFav(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2.5 rounded-full border transition-all ${
        fav
          ? 'bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/60 dark:border-rose-800 dark:text-rose-400'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500 hover:border-rose-300'
      }`}
      title={fav ? 'Remove from favorites' : 'Save to favorites'}
      aria-label="Toggle Favorite"
    >
      <Heart className={`w-5 h-5 ${fav ? 'fill-current' : ''}`} />
    </button>
  );
};
