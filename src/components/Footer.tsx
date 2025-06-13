
import { Smartphone, Mail, Shield, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-black">M</span>
              </div>
              <span className="text-2xl font-bold text-white">MedAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered prescription analysis and management for modern healthcare.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AI Prescription Analysis</li>
              <li>Secure Cloud Storage</li>
              <li>Biometric Authentication</li>
              <li>Patient-Friendly Summaries</li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Security & Privacy</h3>
            <div className="flex items-center justify-center md:justify-end space-x-4 text-gray-400">
              <Shield className="h-5 w-5" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-4 text-gray-400 mt-2">
              <Lock className="h-5 w-5" />
              <span>End-to-End Encryption</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MedAI. All rights reserved. | Built with advanced AI technology for healthcare innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
