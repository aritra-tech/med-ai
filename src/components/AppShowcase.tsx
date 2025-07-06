const AppShowcase = () => {
  const showcaseItems = [
    {
      image: "/lovable-uploads/d1dbb162-1b88-4a74-af65-c893039a8fcf.png",
      title: "Prescription History",
    },
    {
      image: "/lovable-uploads/e3680866-9a7a-4b42-aa2b-439fc543b63c.png",
      title: "Detailed Analysis",
    },
    {
      image: "/lovable-uploads/080033e4-a485-4b1f-9742-d40e71162151.png",
      title: "Smart Scanning",
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See MedAI in Action
          </h2>
        </div>

        {/* Showcase Columns */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-20 md:gap-40">
          {showcaseItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start max-w-xs w-60">
              <div className="relative w-full mb-8">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="rounded-2xl shadow-2xl border border-gray-800 w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-white text-left w-full">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
