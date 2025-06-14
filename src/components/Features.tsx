
import { Brain, Shield, Camera, Database, Smartphone, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced generative AI validates prescriptions and extracts key information including doctor details, medications, and dosage instructions."
    },
    {
      icon: Camera,
      title: "Image Recognition",
      description: "Simply upload a prescription image and let our AI analyze, validate, and summarize the medical information instantly."
    },
    {
      icon: Database,
      title: "Secure Cloud Storage",
      description: "Save analyzed prescriptions securely to the cloud with your authenticated account for easy access anytime, anywhere."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Firebase Authentication with Google Sign-in and optional biometric authentication for enhanced privacy protection."
    },
    {
      icon: Smartphone,
      title: "Modern Android App",
      description: "Built with Jetpack Compose, Hilt dependency injection, and modular architecture for optimal performance."
    },
    {
      icon: Lock,
      title: "Patient-Friendly Summaries",
      description: "Complex medical jargon translated into easy-to-understand language, making prescriptions accessible to everyone."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-950/50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-transparent to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            MedAI combines cutting-edge AI technology with robust security to revolutionize how you manage medical prescriptions.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative w-64 h-64 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl animate-pulse"></div>
                <div className="relative w-full h-full bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center backdrop-blur-lg">
                  <feature.icon className="h-24 w-24 text-white" />
                </div>
              </div>
              
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
