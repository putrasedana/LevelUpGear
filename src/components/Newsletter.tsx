import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, you'd send this to your email service
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
            <Mail className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
        <p className="text-gray-300">
          Get the latest gear reviews, pro streaming tips, and exclusive deals delivered to your inbox.
        </p>
      </div>

      {isSubscribed ? (
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-white mb-2">Welcome to the crew!</h4>
          <p className="text-gray-300">You're all set to receive our latest updates.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;