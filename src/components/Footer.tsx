
const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
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
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 MedAI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
