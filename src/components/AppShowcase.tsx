
const AppShowcase = () => {
  const showcaseItems = [
    {
      image: "/lovable-uploads/d1dbb162-1b88-4a74-af65-c893039a8fcf.png",
      title: "Prescription History",
      description: "View and manage all your analyzed prescriptions in one organized dashboard with search functionality."
    },
    {
      image: "/lovable-uploads/e3680866-9a7a-4b42-aa2b-439fc543b63c.png",
      title: "Detailed Analysis",
      description: "Get comprehensive breakdowns of medications, dosages, and treatment instructions with AI-powered insights."
    },
    {
      image: "/lovable-uploads/080033e4-a485-4b1f-9742-d40e71162151.png",
      title: "Smart Scanning",
      description: "Capture prescription images with intelligent scanning technology that automatically processes and summarizes content."
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See MedAI in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the intuitive interface and powerful AI capabilities that make prescription management effortless.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative max-w-sm flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="rounded-2xl shadow-2xl border border-gray-800"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse"></div>
              </div>
              
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
