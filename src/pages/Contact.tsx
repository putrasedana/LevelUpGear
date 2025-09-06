import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: ''
      });
    }, 3000);
  };

  const contactTypes = [
    {
      icon: MessageSquare,
      title: 'General Inquiries',
      description: 'Questions about our reviews or the site'
    },
    {
      icon: Users,
      title: 'Partnerships',
      description: 'Brand collaborations and sponsorships'
    },
    {
      icon: Mail,
      title: 'Press & Media',
      description: 'Media inquiries and press releases'
    }
  ];

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'review-request', label: 'Review Request' },
    { value: 'partnership', label: 'Partnership/Sponsorship' },
    { value: 'press', label: 'Press/Media' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question, suggestion, or want to partner with us? We'd love to hear from you. 
            Our team typically responds within 24-48 hours.
          </p>
        </div>

        {/* Contact Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-gray-300 mb-4">
                Thank you for reaching out. We'll get back to you within 24-48 hours.
              </p>
              <p className="text-sm text-gray-400">
                Redirecting you back to the form...
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="Brief subject line"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 appearance-none cursor-pointer"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value} className="bg-gray-800">
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-vertical"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </>
          )}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-white mb-4">Other Ways to Reach Us</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@levelupgear.com"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              hello@levelupgear.com
            </a>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <a
              href="mailto:partnerships@levelupgear.com"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              partnerships@levelupgear.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;