import React from 'react';

const LoadingSkeleton = ({ type = 'default', count = 1, className = '' }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`glass-card rounded-2xl p-6 animate-pulse ${className}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-xl"></div>
              <div className="flex-1">
                <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-slate-700 rounded"></div>
              <div className="h-3 bg-slate-700 rounded w-5/6"></div>
              <div className="h-3 bg-slate-700 rounded w-4/6"></div>
            </div>
          </div>
        );

      case 'message':
        return (
          <div className={`glass-card rounded-2xl p-4 animate-pulse ${className}`}>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex-shrink-0"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-slate-700 rounded w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-slate-700 rounded"></div>
                  <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'input':
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="h-4 bg-slate-700 rounded w-1/4 mb-2"></div>
            <div className="h-12 bg-slate-700 rounded-xl"></div>
          </div>
        );

      case 'button':
        return (
          <div className={`h-12 bg-slate-700 rounded-xl animate-pulse ${className}`}></div>
        );

      case 'avatar':
        return (
          <div className={`w-12 h-12 bg-slate-700 rounded-full animate-pulse ${className}`}></div>
        );

      case 'text':
        return (
          <div className={`space-y-2 animate-pulse ${className}`}>
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            <div className="h-4 bg-slate-700 rounded w-4/6"></div>
          </div>
        );

      case 'stats':
        return (
          <div className={`glass-card rounded-2xl p-6 animate-pulse ${className}`}>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-xl"></div>
              <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
            </div>
            <div className="h-8 bg-slate-700 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
          </div>
        );

      case 'list':
        return (
          <div className={`space-y-3 animate-pulse ${className}`}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-4 bg-slate-700 rounded w-3/4 mb-1"></div>
                  <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'table':
        return (
          <div className={`glass-card rounded-2xl p-6 animate-pulse ${className}`}>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-700 rounded w-1/3"></div>
                    <div className="h-3 bg-slate-700 rounded w-1/4"></div>
                  </div>
                  <div className="w-20 h-8 bg-slate-700 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'chart':
        return (
          <div className={`glass-card rounded-2xl p-6 animate-pulse ${className}`}>
            <div className="h-6 bg-slate-700 rounded w-1/3 mb-6"></div>
            <div className="h-48 bg-slate-700 rounded-xl"></div>
          </div>
        );

      default:
        return (
          <div className={`glass-card rounded-2xl p-6 animate-pulse ${className}`}>
            <div className="space-y-4">
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
              <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            </div>
          </div>
        );
    }
  };

  if (count === 1) {
    return renderSkeleton();
  }

  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, index) => (
        <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

// Specific skeleton components for common use cases
export const CardSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="card" count={count} className={className} />
);

export const MessageSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="message" count={count} className={className} />
);

export const InputSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="input" count={count} className={className} />
);

export const ButtonSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="button" count={count} className={className} />
);

export const AvatarSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="avatar" count={count} className={className} />
);

export const TextSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="text" count={count} className={className} />
);

export const StatsSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="stats" count={count} className={className} />
);

export const ListSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="list" count={count} className={className} />
);

export const TableSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="table" count={count} className={className} />
);

export const ChartSkeleton = ({ count = 1, className = '' }) => (
  <LoadingSkeleton type="chart" count={count} className={className} />
);

export default LoadingSkeleton;
