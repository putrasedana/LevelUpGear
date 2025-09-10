import React from 'react';
import { AlertTriangle, ExternalLink, DollarSign, Shield, Info, Mail } from 'lucide-react';

const Disclaimer = () => {
  const sections = [
    {
      icon: AlertTriangle,
      title: "General Disclaimer",
      content: [
        "The information on LevelUpGear is provided on an 'as is' basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, obligations, and liabilities arising out of or in connection with all information and materials on this website.",
        "Subject to the above, nothing in this disclaimer will limit any of our liabilities in any way that is not permitted under applicable law, or exclude any of our liabilities that may not be excluded under applicable law.",
        "The information on this website is not intended as financial, investment, or professional advice. Always consult with qualified professionals before making purchasing decisions."
      ]
    },
    {
      icon: ExternalLink,
      title: "External Links Disclaimer",
      content: [
        "LevelUpGear contains links to external websites that are not provided or maintained by or in any way affiliated with our company.",
        "Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
        "We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
        "Should you encounter any broken links or inappropriate content on external sites, please contact us to report the issue."
      ]
    },
    {
      icon: DollarSign,
      title: "Affiliate Marketing Disclaimer",
      content: [
        "LevelUpGear participates in various affiliate marketing programs, which means we get paid commissions on purchases made through our links to retailer sites.",
        "As an Amazon Associate, we earn from qualifying purchases. This means that when you click on certain links on our site and make a purchase, we may receive a small commission at no extra cost to you.",
        "Our affiliate relationships do not influence our reviews, recommendations, or editorial content. We only recommend products we genuinely believe will benefit our readers.",
        "All opinions expressed on this site are our own and are not influenced by any affiliate partnerships or compensation received."
      ]
    },
    {
      icon: Shield,
      title: "Product Review Disclaimer",
      content: [
        "All product reviews on LevelUpGear are based on our personal experience, testing, and research. Individual results may vary based on personal preferences, usage patterns, and technical setup.",
        "We strive to provide accurate and up-to-date information, but product specifications, pricing, and availability may change without notice.",
        "Our reviews reflect our honest opinions at the time of testing. Technology evolves rapidly, and newer versions of products may address issues mentioned in our reviews.",
        "We recommend conducting your own research and reading multiple sources before making purchasing decisions."
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
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-gray-300 text-lg">
            Last updated: January 2025
          </p>
          <p className="text-gray-400 mt-2">
            Important information about the use of LevelUpGear and our content.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Important Notice</h2>
          <p className="text-gray-300 mb-4">
            The information contained on LevelUpGear website is for general information purposes only. 
            While we endeavor to keep the information up to date and correct, we make no representations 
            or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
            suitability, or availability of the website or the information, products, services, or related 
            graphics contained on the website for any purpose.
          </p>
          <p className="text-gray-300">
            Any reliance you place on such information is therefore strictly at your own risk. 
            Please read the following disclaimers carefully before using our website.
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
                <div className="space-y-4">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accuracy Disclaimer */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <Info className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Accuracy of Information</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              While we make every effort to ensure that the information on LevelUpGear is accurate and up-to-date, 
              we cannot guarantee its completeness or accuracy. Product specifications, prices, and availability 
              are subject to change without notice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">What We Do</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Regularly update our content</li>
                  <li>• Test products thoroughly</li>
                  <li>• Research current market prices</li>
                  <li>• Verify product specifications</li>
                  <li>• Monitor for changes and updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Your Responsibility</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Verify current pricing before purchase</li>
                  <li>• Check product availability</li>
                  <li>• Read manufacturer specifications</li>
                  <li>• Consider your specific needs</li>
                  <li>• Consult multiple sources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              In no event will LevelUpGear, its owners, employees, or affiliates be liable for any loss or damage 
              including without limitation, indirect or consequential loss or damage, or any loss or damage 
              whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
            <p>
              Through this website, you are able to link to other websites which are not under the control of LevelUpGear. 
              We have no control over the nature, content, and availability of those sites. The inclusion of any links 
              does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <p className="text-sm">
                <strong>Important:</strong> Some jurisdictions do not allow the exclusion of certain warranties 
                or the limitation of liability for consequential or incidental damages. In such jurisdictions, 
                our liability will be limited to the maximum extent permitted by law.
              </p>
            </div>
          </div>
        </div>

        {/* Fair Use */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Fair Use and Copyright</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              LevelUpGear may use product images, logos, and other copyrighted materials under the doctrine of fair use 
              for the purpose of product reviews, criticism, and commentary. All copyrighted materials belong to their 
              respective owners.
            </p>
            <p>
              If you are a copyright owner and believe that your copyrighted work has been used in a way that 
              constitutes copyright infringement, please contact us immediately with details of the alleged infringement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <Shield className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1">Fair Use</h3>
                <p className="text-gray-400 text-sm">Educational and review purposes</p>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <ExternalLink className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1">Attribution</h3>
                <p className="text-gray-400 text-sm">Proper credit to original sources</p>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <Info className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-white font-semibold mb-1">Compliance</h3>
                <p className="text-gray-400 text-sm">Adherence to copyright laws</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-purple-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Questions About This Disclaimer</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              If you have any questions about this disclaimer or need clarification on any of the points mentioned above, 
              please don't hesitate to contact us.
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
                <strong>Note:</strong> This disclaimer is subject to change without notice. We recommend reviewing 
                this page periodically for any updates. Your continued use of LevelUpGear constitutes acceptance 
                of any changes to this disclaimer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;