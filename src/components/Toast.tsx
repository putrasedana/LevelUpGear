import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div className={`flex items-center space-x-3 px-6 py-4 rounded-lg shadow-lg border backdrop-blur-sm ${
        type === 'success' 
          ? 'bg-green-900/90 border-green-500/50 text-green-100' 
          : 'bg-red-900/90 border-red-500/50 text-red-100'
      }`}>
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-green-400" />
          ) : (
            <XCircle className="h-5 w-5 text-red-400" />
          )}
        </div>
        <p className="font-medium">{message}</p>
        <button
          onClick={onClose}
          className={`flex-shrink-0 p-1 rounded-full hover:bg-opacity-20 transition-colors ${
            type === 'success' ? 'hover:bg-green-400' : 'hover:bg-red-400'
          }`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;