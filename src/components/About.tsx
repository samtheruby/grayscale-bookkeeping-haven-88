import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                About Grayscale Books
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 2022, we specialize in providing reliable, accurate bookkeeping services 
                specifically designed for small businesses. Our mission is to simplify 
                your financial management so you can focus on what you do best – 
                growing your business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With experience in small business accounting, we understand 
                the unique challenges you face. From monthly bookkeeping to payroll 
                management, we provide the professional support you need to succeed.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2">Small</div>
                <div className="text-sm text-gray-600">Client Base - Each Client is Our Priority</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2">Since 2022</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-card border-gray-200 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Excellence</h3>
                    <p className="text-gray-600">
                      Certified bookkeeping professionals committed to accuracy and compliance 
                      with the highest industry standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-gray-200 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Business Focus</h3>
                    <p className="text-gray-600">
                      Specialized expertise in small business needs, from startups to 
                      established companies seeking reliable financial management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-gray-200 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Service</h3>
                    <p className="text-gray-600">
                      Dedicated support with personalized attention. We build lasting 
                      relationships with our clients based on trust and reliability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;