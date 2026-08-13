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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header Tabs */}
        <div className="flex items-center justify-between border-b border-slate-100 p-3 sm:p-4 bg-slate-50">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('recents')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'recents'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              {t.recentSearches} ({recents.length})
            </button>

            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'favorites'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              {t.favorites} ({favorites.length})
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200/50"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-3 sm:p-4 overflow-y-auto flex-1">
          {activeTab === 'recents' ? (
            <div>
              {recents.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-xs sm:text-sm">
                  {t.noRecentSearches}
                </div>
              ) : (
                <div className="space-y-1.5">
                  {recents.map((item) => (
                    <div
                      key={item.slug}
                      className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
                    >
                      <Link
                        href={`/name/${item.slug}`}
                        onClick={onClose}
                        className="font-semibold text-slate-900 text-xs sm:text-sm hover:text-emerald-600 flex-1 truncate"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => handleRemoveSingle(item.slug)}
                        className="p-1 text-slate-400 hover:text-rose-600"
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
                <div className="py-8 text-center text-slate-400 text-xs sm:text-sm">
                  {t.noFavorites}
                </div>
              ) : (
                <div className="space-y-1.5">
                  {favorites.map((item) => (
                    <div
                      key={item.slug}
                      className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-rose-50/50 border border-rose-100"
                    >
                      <Link
                        href={`/name/${item.slug}`}
                        onClick={onClose}
                        className="font-semibold text-slate-900 text-xs sm:text-sm hover:text-rose-600 flex-1 truncate"
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
          <div className="p-3 border-t border-slate-100 bg-slate-50 flex justify-end">
            <button
              onClick={handleClearRecents}
              className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold px-3 py-1.5 rounded-lg hover:bg-rose-50"
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
