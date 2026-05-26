'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import{ useEffect } from 'react';

export default function FocusedOverlay({ children , componentId  } : {children : React.ReactNode, componentId : string}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get('view');
  const isOpen = active === componentId;

  // Prevent background scrolling on the main page body when overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    // Navigates back to the base page, removing the query param
    router.push('/', { scroll: false });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-zinc-950/60 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={handleClose} 
    >
      {/* Modal Container */}
      <div 
        className="w-full max-w-5xl h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300 ease-out"
        onClick={(e) => e.stopPropagation()} // Stop bubbling so clicking inside doesn't close modal
      >
        
        {/* Sticky Header Bar (Stays pinned while content scrolls) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Expanded View
            </h3>
          </div>
          
          <button 
            onClick={handleClose}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-semibold transition-all duration-200 active:scale-95"
          >
            <span className="text-sm transition-transform group-hover:rotate-90 duration-200">✕</span> 
            Close
          </button>
        </div>

        {/* 🚀 Dedicated Scrolling Content Wrapper */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
          {/* Inner bounds container to give components breathing room */}
          <div className="w-full h-full min-h-fit">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}