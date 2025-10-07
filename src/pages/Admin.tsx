import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, BarChart3, Settings, Plus, CreditCard as Edit, Trash2, Eye, Search, Filter, Download, Upload, Shield, Mail, Calendar, TrendingUp, Star, MessageSquare, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'products', name: 'Products', icon: FileText },
    { id: 'users', name: 'Users', icon: Users },
    { id: 'reviews', name: 'Reviews', icon: Star },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  // Mock data
  const stats = [
    { name: 'Total Products', value: '127', change: '+12%', icon: FileText, color: 'text-blue-400' },
    { name: 'Total Users', value: '2,847', change: '+23%', icon: Users, color: 'text-green-400' },
    { name: 'Monthly Views', value: '45.2K', change: '+8%', icon: Eye, color: 'text-purple-400' },
    { name: 'Revenue', value: '$3,247', change: '+15%', icon: TrendingUp, color: 'text-yellow-400' },
  ];

  const recentProducts = [
    { id: 1, name: 'SteelSeries Arctis 7P', category: 'Gaming Headset', status: 'Published', date: '2025-01-15' },
    { id: 2, name: 'Blue Yeti USB Microphone', category: 'Microphone', status: 'Draft', date: '2025-01-14' },
    { id: 3, name: 'Elgato HD60 S+', category: 'Capture Card', status: 'Published', date: '2025-01-13' },
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', joined: '2025-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', joined: '2025-01-14' },
    { id: 3, name: 'Putra Sedana', email: 'putrasedana03@gmail.com', role: 'Admin', joined: '2025-01-13' },
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Welcome back, Admin!
            </h2>
            <p className="text-gray-300">Here's what's happening with LevelUpGear today.</p>
            <p className="text-sm text-purple-400 mt-2">
              Logged in as: {user?.email}
            </p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
            <Shield className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.name}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <div className={`p-3 bg-gray-700/50 rounded-full`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Products */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Products</h3>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">{product.name}</h4>
                  <p className="text-gray-400 text-sm">{product.category}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    product.status === 'Published' 
                      ? 'bg-green-600/20 text-green-400' 
                      : 'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {product.status}
                  </span>
                  <p className="text-gray-400 text-xs mt-1">{product.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Users</h3>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{user.name}</h4>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.role === 'Admin' 
                      ? 'bg-purple-600/20 text-purple-400' 
                      : 'bg-blue-600/20 text-blue-400'
                  }`}>
                    {user.role}
                  </span>
                  <p className="text-gray-400 text-xs mt-1">{user.joined}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Product Management</h2>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all transform hover:scale-105">
          onClick={() => navigate('/admin/add-product')}
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white hover:bg-gray-700 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white hover:bg-gray-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-700/30">
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">{product.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-300">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.status === 'Published' 
                        ? 'bg-green-600/20 text-green-400' 
                        : 'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-300">{product.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-400 hover:bg-blue-600/20 rounded-lg transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-yellow-400 hover:bg-yellow-600/20 rounded-lg transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:bg-red-600/20 rounded-lg transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'products':
        return renderProducts();
      case 'users':
        return <div className="text-white">Users management coming soon...</div>;
      case 'reviews':
        return <div className="text-white">Reviews management coming soon...</div>;
      case 'messages':
        return <div className="text-white">Messages management coming soon...</div>;
      case 'settings':
        return <div className="text-white">Settings coming soon...</div>;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                <p className="text-xs text-gray-400">LevelUpGear</p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 border border-purple-500/30'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* View Site Button */}
            <div className="mt-auto p-6 border-t border-gray-700">
              <Link
                to="/"
                className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg font-medium transition-all transform hover:scale-105"
              >
                <ExternalLink className="h-5 w-5" />
                <span>View Site</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;