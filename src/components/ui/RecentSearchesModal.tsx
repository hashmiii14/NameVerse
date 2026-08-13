'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { History, Heart, Trash2, X } from 'lucide-react';
import { getRecentSearches, clearRecentSearches, getFavorites, StorageItem, removeRecentSearch } from '@/lib/utils/storage';
import { useLanguage } from '@/lib/context/LanguageContext';

interface RecentSearchesModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'recents' | 'favorites';
}

export const RecentSearchesModal: React.FC<RecentSearchesModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'recents',
}) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'recents' | 'favorites'>(defaultTab);
  const [recents, setRecents] = useState<StorageItem[]>([]);
  const [favorites, setFavorites] = useState<StorageItem[]>([]);

  useEffect(() => {
    if (isOpen) {
      setRecents(getRecentSearches());
      setFavorites(getFavorites());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClearRecents = () => {
    clearRecentSearches();
    setRecents([]);
  };

  const handleRemoveSingle = (slug: string) => {
    removeRecentSearch(slug);
    setRecents(getRecentSearches());
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('recents')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'recents'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              {t.recentSearches} ({recents.length})
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'favorites'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              {t.favorites} ({favorites.length})
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 overflow-y-auto flex-1">
          {activeTab === 'recents' ? (
            <div>
              {recents.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-sm">
                  {t.noRecentSearches}
                </div>
              ) : (
                <div className="space-y-2">
                  {recents.map((item) => (
                    <div
                      key={item.slug}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    >
                      <Link
                        href={`/name/${item.slug}`}
                        onClick={onClose}
                        className="font-medium text-slate-900 dark:text-slate-100 text-sm hover:text-emerald-600 flex-1"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => handleRemoveSingle(item.slug)}
                        className="p-1 text-slate-400 hover:text-rose-500"
                        title="Remove"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              {favorites.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-sm">
                  {t.noFavorites}
                </div>
              ) : (
                <div className="space-y-2">
                  {favorites.map((item) => (
                    <div
                      key={item.slug}
                      className="flex items-center justify-between p-3 rounded-xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30"
                    >
                      <Link
                        href={`/name/${item.slug}`}
                        onClick={onClose}
                        className="font-medium text-slate-900 dark:text-slate-100 text-sm hover:text-rose-600 flex-1"
                      >
                        {item.name}
                      </Link>
                      <Heart className="w-4 h-4 text-rose-500 fill-current" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {activeTab === 'recents' && recents.length > 0 && (
          <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end">
            <button
              onClick={handleClearRecents}
              className="flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 font-medium px-3 py-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/50"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {t.clearHistory}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
