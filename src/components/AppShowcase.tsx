
const AppShowcase = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See MedAI in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the intuitive interface and powerful AI capabilities that make prescription management effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="text-center">
            <div className="relative max-w-xs mx-auto mb-6">
              <img 
                src="/lovable-uploads/d1dbb162-1b88-4a74-af65-c893039a8fcf.png" 
                alt="Prescription List View"
                className="rounded-2xl shadow-2xl border border-gray-800"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-lg"></div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Prescription History</h3>
            <p className="text-gray-400">
              View and manage all your analyzed prescriptions in one organized dashboard with search functionality.
            </p>
          </div>

          <div className="text-center">
            <div className="relative max-w-xs mx-auto mb-6">
              <img 
                src="/lovable-uploads/e3680866-9a7a-4b42-aa2b-439fc543b63c.png" 
                alt="Prescription Details"
                className="rounded-2xl shadow-2xl border border-gray-800"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl blur-lg"></div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Detailed Analysis</h3>
            <p className="text-gray-400">
              Get comprehensive breakdowns of medications, dosages, and treatment instructions with AI-powered insights.
            </p>
          </div>

          <div className="text-center">
            <div className="relative max-w-xs mx-auto mb-6">
              <img 
                src="/lovable-uploads/080033e4-a485-4b1f-9742-d40e71162151.png" 
                alt="Prescription Scanner"
                className="rounded-2xl shadow-2xl border border-gray-800"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg"></div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Smart Scanning</h3>
            <p className="text-gray-400">
              Capture prescription images with intelligent scanning technology that automatically processes and summarizes content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
