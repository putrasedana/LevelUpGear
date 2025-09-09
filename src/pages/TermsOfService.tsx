import React from 'react';
import { Shield, FileText, AlertTriangle, Scale, Globe, Mail } from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using LevelUpGear, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
        "We reserve the right to update these terms at any time without prior notice."
      ]
    },
    {
      icon: Globe,
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of LevelUpGear materials for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: [
        "The materials on LevelUpGear are provided on an 'as is' basis. LevelUpGear makes no warranties, expressed or implied.",
        "LevelUpGear disclaims all other warranties and conditions, including implied warranties or conditions of merchantability, fitness for a particular purpose.",
        "LevelUpGear does not warrant that its materials, servers, or emails are free of viruses or other harmful components.",
        "Product reviews and recommendations are based on our testing and experience but individual results may vary."
      ]
    },
    {
      icon: Scale,
      title: "Limitations",
      content: [
        "In no event shall LevelUpGear or its suppliers be liable for any damages arising out of the use or inability to use the materials.",
        "This includes damages for loss of data, loss of profits, or business interruption.",
        "Some jurisdictions do not allow limitations on implied warranties or limitations of liability for consequential damages.",
        "These limitations may not apply to you depending on your local laws."
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
              <Scale className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-300 text-lg">
            Last updated: January 2025
          </p>
          <p className="text-gray-400 mt-2">
            Please read these terms carefully before using LevelUpGear services.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Welcome to LevelUpGear</h2>
          <p className="text-gray-300 mb-4">
            These Terms of Service ("Terms") govern your use of LevelUpGear's website and services. 
            By using our website, you agree to these terms in full.
          </p>
          <p className="text-gray-300">
            LevelUpGear is a gaming and streaming gear review website that provides honest reviews, 
            comparisons, and recommendations to help users make informed purchasing decisions.
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
                <div className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Affiliate Relationships</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300">
              LevelUpGear participates in affiliate marketing programs. This means we may earn commissions 
              from qualifying purchases made through our links at no additional cost to you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Our Promise</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Honest, unbiased reviews</li>
                  <li>• Transparent affiliate relationships</li>
                  <li>• No influence on our recommendations</li>
                  <li>• Clear disclosure of partnerships</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Affiliate Partners</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Amazon Associates Program</li>
                  <li>• Gaming hardware manufacturers</li>
                  <li>• Streaming equipment brands</li>
                  <li>• Other retail partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* User Conduct */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">User Conduct</h2>
          <p className="text-gray-300 mb-4">
            When using LevelUpGear, you agree to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-3 text-green-400">✓ Acceptable Use</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Use the site for personal, non-commercial purposes</li>
                <li>• Respect intellectual property rights</li>
                <li>• Provide accurate information when contacting us</li>
                <li>• Follow applicable laws and regulations</li>
                <li>• Respect other users and our community</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3 text-red-400">✗ Prohibited Activities</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Scraping or copying our content without permission</li>
                <li>• Attempting to hack or disrupt our services</li>
                <li>• Posting spam or malicious content</li>
                <li>• Impersonating LevelUpGear or our staff</li>
                <li>• Using our content for commercial purposes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              All content on LevelUpGear, including but not limited to text, graphics, logos, images, 
              and software, is the property of LevelUpGear and is protected by copyright and other 
              intellectual property laws.
            </p>
            <p>
              Product names, logos, and brands are property of their respective owners. LevelUpGear 
              is not affiliated with these companies unless explicitly stated.
            </p>
            <p>
              You may not reproduce, distribute, or create derivative works from our content without 
              explicit written permission.
            </p>
          </div>
        </div>

        {/* Privacy and Data */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Privacy and Data Protection</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Your privacy is important to us. Our collection and use of personal information is 
              governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
            <p>
              By using LevelUpGear, you consent to the collection and use of information as 
              outlined in our Privacy Policy.
            </p>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <p className="text-sm">
                <strong>Note:</strong> Please review our Privacy Policy for detailed information 
                about how we collect, use, and protect your personal data.
              </p>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              We reserve the right to terminate or suspend access to LevelUpGear immediately, 
              without prior notice, for any reason, including breach of these Terms.
            </p>
            <p>
              Upon termination, your right to use the service will cease immediately. All provisions 
              of the Terms which should survive termination shall survive, including ownership 
              provisions, warranty disclaimers, and limitations of liability.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the 
              jurisdiction in which LevelUpGear operates, without regard to conflict of law provisions.
            </p>
            <p>
              Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
              of the courts in that jurisdiction.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              LevelUpGear reserves the right to modify these Terms at any time. We will notify users 
              of any material changes by posting the new Terms on this page and updating the 
              "Last updated" date.
            </p>
            <p>
              Your continued use of LevelUpGear after any changes indicates your acceptance of the 
              new Terms. If you do not agree to the modified Terms, you should discontinue use of 
              the service.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">General Inquiries</h3>
                <p className="text-sm">
                  Email: <a href="mailto:hello@levelupgear.com" className="text-purple-400 hover:text-purple-300">hello@levelupgear.com</a>
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Legal Matters</h3>
                <p className="text-sm">
                  Email: <a href="mailto:legal@levelupgear.com" className="text-purple-400 hover:text-purple-300">legal@levelupgear.com</a>
                </p>
              </div>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4 mt-4">
              <p className="text-sm">
                <strong>Response Time:</strong> We typically respond to inquiries within 24-48 hours 
                during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;