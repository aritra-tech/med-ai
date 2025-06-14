
import { Brain, Shield, Camera, Database, Smartphone, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-lg hover:border-purple-400/80 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
