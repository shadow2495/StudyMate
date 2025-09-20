import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'primary', 
  text = '', 
  className = '',
  fullScreen = false 
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-purple-500',
    success: 'border-green-500',
    warning: 'border-yellow-500',
    error: 'border-red-500',
    white: 'border-white',
    slate: 'border-slate-400'
  };

  const spinnerElement = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Main spinner */}
        <div 
          className={`${sizeClasses[size]} border-2 border-transparent ${colorClasses[color]} border-t-current rounded-full animate-spin`}
        ></div>
        
        {/* Optional inner spinner for more visual appeal */}
        {size === 'lg' || size === 'xl' ? (
          <div 
            className={`absolute inset-1 border border-transparent ${colorClasses[color]} border-b-current rounded-full animate-spin`}
            style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
          ></div>
        ) : null}
        
        {/* Pulsing dot in center for larger spinners */}
        {(size === 'lg' || size === 'xl') && (
          <div 
            className={`absolute inset-0 flex items-center justify-center`}
          >
            <div 
              className={`w-2 h-2 ${colorClasses[color].replace('border-', 'bg-')} rounded-full animate-pulse`}
            ></div>
          </div>
        )}
      </div>
      
      {text && (
        <p className="mt-4 text-slate-300 text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="glass-intense rounded-3xl p-8 text-center">
          {spinnerElement}
        </div>
      </div>
    );
  }

  return spinnerElement;
};

// Specialized spinner components
export const PageLoader = ({ text = 'Loading...' }) => (
  <div className="min-h-screen bg-hero-gradient flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="xl" color="primary" text={text} />
    </div>
  </div>
);

export const ButtonLoader = ({ size = 'sm' }) => (
  <LoadingSpinner size={size} color="white" />
);

export const InlineLoader = ({ text = '' }) => (
  <LoadingSpinner size="sm" color="slate" text={text} />
);

export const CardLoader = () => (
  <div className="glass-card rounded-2xl p-8">
    <LoadingSpinner size="lg" color="primary" text="Loading content..." />
  </div>
);

export const ModalLoader = ({ text = 'Processing...' }) => (
  <div className="glass-intense rounded-2xl p-8 text-center">
    <LoadingSpinner size="lg" color="primary" text={text} />
  </div>
);

// Animated dots loader
export const DotsLoader = ({ text = 'Loading...', className = '' }) => (
  <div className={`flex items-center justify-center space-x-1 ${className}`}>
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
    {text && (
      <span className="ml-3 text-slate-300 text-sm font-medium">{text}</span>
    )}
  </div>
);

// Progress bar loader
export const ProgressLoader = ({ progress = 0, text = 'Loading...', className = '' }) => (
  <div className={`w-full ${className}`}>
    {text && (
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{text}</span>
        <span className="text-sm font-medium text-slate-400">{Math.round(progress)}%</span>
      </div>
    )}
    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
      <div 
        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      >
        <div className="h-full bg-white/20 animate-pulse"></div>
      </div>
    </div>
  </div>
);

// Skeleton loader with shimmer effect
export const ShimmerLoader = ({ className = '' }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="h-4 bg-slate-700 rounded mb-2"></div>
    <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-slate-700 rounded w-1/2"></div>
  </div>
);

export default LoadingSpinner;
