
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[1000px] h-[1000px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6">
            <span className="text-4xl font-bold text-black">M</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
            MedAI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            AI-Powered Prescription Analysis and Management
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Transform your prescription management with advanced AI technology. 
            Upload, analyze, and securely store your medical prescriptions with intelligent insights.
          </p>
        </div>
        
        <div className="flex justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold shadow-lg shadow-white/10">
            <Download className="mr-2 h-5 w-5" />
            Download for Android
          </Button>
        </div>

        <div className="flex justify-center animate-fade-in-up animation-delay-800">
          <div className="relative max-w-sm mx-auto">
            <img 
              src="/lovable-uploads/d1dbb162-1b88-4a74-af65-c893039a8fcf.png" 
              alt="MedAI App Interface"
              className="rounded-3xl shadow-2xl border-2 border-purple-500/20"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
