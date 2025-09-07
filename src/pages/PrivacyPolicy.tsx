import React from 'react';
import { Shield, Eye, Cookie, Mail, ExternalLink } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email address) when subscribing to our newsletter or contacting us",
        "Usage data including pages visited, time spent on site, and referral sources",
        "Device information such as browser type, operating system, and IP address",
        "Cookies and similar tracking technologies for site functionality and analytics"
      ]
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: [
        "Send you our newsletter with gear reviews and streaming tips (with your consent)",
        "Respond to your inquiries and provide customer support",
        "Improve our website content and user experience",
        "Analyze site traffic and user behavior through analytics tools",
        "Comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content: [
        "Essential cookies for website functionality and user preferences",
        "Analytics cookies (Google Analytics) to understand how visitors use our site",
        "Advertising cookies for affiliate link tracking and commission attribution",
        "You can control cookie preferences through your browser settings"
      ]
    },
    {
      icon: Mail,
      title: "Third-Party Services",
      content: [
        "Google Analytics for website traffic analysis",
        "Email service providers for newsletter delivery",
        "Affiliate networks (Amazon Associates, etc.) for product recommendations",
        "Social media platforms for content sharing and engagement"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">
            Last updated: January 2025
          </p>
          <p className="text-gray-400 mt-2">
            Your privacy is important to us. This policy explains how LevelUpGear collects, uses, and protects your information.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            LevelUpGear ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-gray-300">
            By using our website, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our website.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mr-4">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <ExternalLink className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Affiliate Disclosure</h2>
          </div>
          <p className="text-gray-300 mb-4">
            LevelUpGear participates in various affiliate marketing programs, which means we may earn commissions from qualifying purchases made through our links. This includes but is not limited to:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="text-gray-300 flex items-start">
              <span className="text-purple-400 mr-3 mt-1">•</span>
              <span>Amazon Associates Program</span>
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-purple-400 mr-3 mt-1">•</span>
              <span>Other retailer affiliate programs</span>
            </li>
            <li className="text-gray-300 flex items-start">
              <span className="text-purple-400 mr-3 mt-1">•</span>
              <span>Brand partnership programs</span>
            </li>
          </ul>
          <p className="text-gray-300">
            These affiliate relationships do not influence our reviews or recommendations. We only recommend products we genuinely believe will benefit our readers.
          </p>
        </div>

        {/* Data Protection Rights */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Your Data Protection Rights</h2>
          <p className="text-gray-300 mb-4">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <h3 className="text-white font-semibold">Right to Access</h3>
                  <p className="text-gray-400 text-sm">Request copies of your personal data</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <h3 className="text-white font-semibold">Right to Rectification</h3>
                  <p className="text-gray-400 text-sm">Request correction of inaccurate data</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <h3 className="text-white font-semibold">Right to Erasure</h3>
                  <p className="text-gray-400 text-sm">Request deletion of your data</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <h3 className="text-white font-semibold">Right to Restrict Processing</h3>
                  <p className="text-gray-400 text-sm">Limit how we use your data</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <h3 className="text-white font-semibold">Right to Data Portability</h3>
                  <p className="text-gray-400 text-sm">Transfer your data to another service</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <div>
                  <h3 className="text-white font-semibold">Right to Object</h3>
                  <p className="text-gray-400 text-sm">Object to certain data processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
          <p className="text-gray-300 mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-700/30 rounded-lg">
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Encryption</h3>
              <p className="text-gray-400 text-sm">SSL/TLS encryption for data transmission</p>
            </div>
            <div className="text-center p-4 bg-gray-700/30 rounded-lg">
              <Eye className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Access Control</h3>
              <p className="text-gray-400 text-sm">Limited access to personal data</p>
            </div>
            <div className="text-center p-4 bg-gray-700/30 rounded-lg">
              <Cookie className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Regular Updates</h3>
              <p className="text-gray-400 text-sm">Security measures regularly reviewed</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
          </p>
          <div className="space-y-2">
            <p className="text-gray-300">
              <strong>Email:</strong> <a href="mailto:privacy@levelupgear.com" className="text-purple-400 hover:text-purple-300">privacy@levelupgear.com</a>
            </p>
            <p className="text-gray-300">
              <strong>General Contact:</strong> <a href="mailto:hello@levelupgear.com" className="text-purple-400 hover:text-purple-300">hello@levelupgear.com</a>
            </p>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p className="text-gray-300">
            We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;