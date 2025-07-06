const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
              <span className="text-xl font-bold text-black">M</span>
            </div>
            <span className="text-2xl font-bold text-white">MedAI</span>
          </div>
          <p className="text-gray-400 mb-4 max-w-md">
            AI-powered prescription analysis and management for modern healthcare.
          </p>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.freeprivacypolicy.com/live/6974b6ca-8e44-4fc3-b33b-53ef9eb988ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.freeprivacypolicy.com/live/aac1e8c9-0eaf-4efa-87cc-c7cf2ddae29b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Made with ❤️ and ☕️ by © Aritra Das 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
