import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, X, Plus, Trash2, Upload, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';

const AddProduct = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    category: 'Gaming Headset',
    website_url: '',
    logo_url: '',
    tool_overview: '',
    key_features: [''],
    pros: [''],
    cons: [''],
    verdict: '',
    related_videos: [''],
    related_blogs: [{ title: '', url: '' }],
    pricing: [{ name: 'Amazon', price: '', url: '' }]
  });

  const categories = [
    'Gaming Headset',
    'USB Microphone',
    'Capture Card',
    'Streaming Software',
    'Gaming Mouse',
    'Gaming Keyboard',
    'Webcam',
    'Audio Interface'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].map((item: any, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const handleObjectArrayChange = (field: string, index: number, key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].map((item: any, i: number) => 
        i === index ? { ...item, [key]: value } : item
      )
    }));
  };

  const addArrayItem = (field: string, defaultValue: any = '') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field as keyof typeof prev], defaultValue]
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.name.trim()) {
        throw new Error('Product name is required');
      }
      if (!formData.tool_overview.trim()) {
        throw new Error('Tool overview is required');
      }
      if (!formData.verdict.trim()) {
        throw new Error('Verdict is required');
      }

      // Filter out empty strings from arrays
      const cleanedData = {
        ...formData,
        key_features: formData.key_features.filter(f => f.trim() !== ''),
        pros: formData.pros.filter(p => p.trim() !== ''),
        cons: formData.cons.filter(c => c.trim() !== ''),
        related_videos: formData.related_videos.filter(v => v.trim() !== ''),
        related_blogs: formData.related_blogs.filter(b => b.title.trim() !== '' && b.url.trim() !== ''),
        pricing: formData.pricing.filter(p => p.name.trim() !== '' || p.price.trim() !== '' || p.url.trim() !== ''),
        created_by: user?.id
      };

      const { data, error } = await supabase
        .from('products')
        .insert([cleanedData])
        .select();

      if (error) {
        throw error;
      }

      console.log('Product created successfully:', data);
      
      // Show success toast and redirect to Products tab
      showToast('Product added successfully!', 'success');
      navigate('/admin?tab=products');
      
    } catch (error) {
      console.error('Error saving product:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to save product';
      setError(errorMessage);
      showToast(`Failed to add product: ${errorMessage}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/admin"
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Admin</span>
            </Link>
            <div className="h-6 w-px bg-gray-600"></div>
            <h1 className="text-3xl font-bold text-white">Add New Product</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="product-form"
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-600 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  <span>Save Product</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form */}
        <form id="product-form" onSubmit={handleSubmit} className="space-y-8">
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {/* Basic Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  name="website_url"
                  value={formData.website_url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Product Image URL
                </label>
                <input
                  type="url"
                  name="logo_url"
                  value={formData.logo_url}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Product Overview</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tool Overview *
              </label>
              <textarea
                name="tool_overview"
                value={formData.tool_overview}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-vertical"
                placeholder="Provide a detailed overview of the product..."
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Key Features</h2>
              <button
                type="button"
                onClick={() => addArrayItem('key_features')}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Feature</span>
              </button>
            </div>
            <div className="space-y-3">
              {formData.key_features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleArrayChange('key_features', index, e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    placeholder="Enter key feature"
                  />
                  {formData.key_features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem('key_features', index)}
                      className="p-2 text-red-400 hover:bg-red-600/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Pros</h2>
                <button
                  type="button"
                  onClick={() => addArrayItem('pros')}
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Pro</span>
                </button>
              </div>
              <div className="space-y-3">
                {formData.pros.map((pro, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={pro}
                      onChange={(e) => handleArrayChange('pros', index, e.target.value)}
                      className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="Enter a positive aspect"
                    />
                    {formData.pros.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('pros', index)}
                        className="p-2 text-red-400 hover:bg-red-600/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Cons</h2>
                <button
                  type="button"
                  onClick={() => addArrayItem('cons')}
                  className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Con</span>
                </button>
              </div>
              <div className="space-y-3">
                {formData.cons.map((con, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="text"
                      value={con}
                      onChange={(e) => handleArrayChange('cons', index, e.target.value)}
                      className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="Enter a negative aspect"
                    />
                    {formData.cons.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('cons', index)}
                        className="p-2 text-red-400 hover:bg-red-600/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Pricing Information</h2>
              <button
                type="button"
                onClick={() => addArrayItem('pricing', { name: '', price: '', url: '' })}
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Add Store</span>
              </button>
            </div>
            <div className="space-y-4">
              {formData.pricing.map((price, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Store Name
                    </label>
                    <input
                      type="text"
                      value={price.name}
                      onChange={(e) => handleObjectArrayChange('pricing', index, 'name', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="Amazon"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Price
                    </label>
                    <input
                      type="text"
                      value={price.price}
                      onChange={(e) => handleObjectArrayChange('pricing', index, 'price', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="$149.99"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Store URL
                    </label>
                    <input
                      type="url"
                      value={price.url}
                      onChange={(e) => handleObjectArrayChange('pricing', index, 'url', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      placeholder="https://amazon.com/..."
                    />
                  </div>
                  <div>
                    {formData.pricing.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('pricing', index)}
                        className="p-3 text-red-400 hover:bg-red-600/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Final Verdict</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Verdict *
              </label>
              <textarea
                name="verdict"
                value={formData.verdict}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-vertical"
                placeholder="Provide your final verdict and recommendation..."
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;