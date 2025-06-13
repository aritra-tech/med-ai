
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6">
            <span className="text-4xl font-bold text-black">M</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            MedAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-Powered Prescription Analysis and Management
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transform your prescription management with advanced AI technology. 
            Upload, analyze, and securely store your medical prescriptions with intelligent insights.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
            <Download className="mr-2 h-5 w-5" />
            Download for Android
          </Button>
          <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg">
            <Smartphone className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-sm mx-auto">
            <img 
              src="/lovable-uploads/d1dbb162-1b88-4a74-af65-c893039a8fcf.png" 
              alt="MedAI App Interface"
              className="rounded-3xl shadow-2xl border border-gray-800"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
