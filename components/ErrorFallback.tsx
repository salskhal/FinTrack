"use client"
import React from 'react';

interface ErrorFallbackProps {
  error: Error | null;
  resetError: () => void;
}

export default function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-red-50 border border-red-200 rounded-lg p-8">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 text-red-500">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" 
            />
          </svg>
        </div>
        
        <h2 className="text-xl font-semibold text-red-900 mb-2">
          Application Error
        </h2>
        
        <p className="text-red-700 mb-4">
          {error?.message || 'An unexpected error occurred while loading the dashboard.'}
        </p>
        
        <div className="space-y-2">
          <button
            onClick={resetError}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && error?.stack && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-red-600 hover:text-red-800">
              Show Error Details
            </summary>
            <pre className="mt-2 p-3 bg-red-100 rounded text-xs text-red-800 overflow-auto max-h-32">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}