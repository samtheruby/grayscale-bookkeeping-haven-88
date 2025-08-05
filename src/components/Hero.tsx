import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-gray-50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional Bookkeeping for{" "}
                <span className="text-brand-navy">Small Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Focus on growing your business while we handle your books. 
                Accurate, reliable, and professional bookkeeping services 
                tailored for small business success.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-navy" />
                <span className="text-gray-700">Monthly financial reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-navy" />
                <span className="text-gray-700">Payroll management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-navy" />
                <span className="text-gray-700">Tax preparation support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="professional" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-3"
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-3"
              >
                View Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 shadow-soft">
              <div className="bg-card rounded-xl p-6 shadow-medium">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Why Choose Grayscale Books?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-navy rounded-full mt-2"></div>
                    <p className="text-gray-600">Expert bookkeeping tailored for small businesses</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-navy rounded-full mt-2"></div>
                    <p className="text-gray-600">Timely and accurate financial reporting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-brand-navy rounded-full mt-2"></div>
                    <p className="text-gray-600">Dedicated support when you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;