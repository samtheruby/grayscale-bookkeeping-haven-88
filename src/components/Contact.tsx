import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to simplify your bookkeeping? Contact us today for a free consultation 
            and discover how we can help your small business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <a 
                      href="tel:718-986-5483" 
                      className="text-brand-navy hover:text-brand-navy/80 transition-colors duration-200"
                    >
                      718-986-5483
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a 
                      href="mailto:chay@grayscalebooks.com" 
                      className="text-brand-navy hover:text-brand-navy/80 transition-colors duration-200"
                    >
                      chay@grayscalebooks.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Business Hours</div>
                    <div className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-brand-navy" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Service Area</div>
                    <div className="text-gray-600">New York Metro Area</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Why Choose Us?</CardTitle>
                <CardDescription className="text-gray-600">
                  Experience the difference professional bookkeeping makes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                  <span className="text-gray-700">Quick response times</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                  <span className="text-gray-700">Transparent pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                  <span className="text-gray-700">Personalized service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-navy rounded-full"></div>
                  <span className="text-gray-700">Local small business expertise</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-card border-gray-200 shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Request Free Consultation
              </CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and we will get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name" 
                      className="border-gray-300 focus:border-brand-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="border-gray-300 focus:border-brand-navy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com"
                    className="border-gray-300 focus:border-brand-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567"
                    className="border-gray-300 focus:border-brand-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input 
                    id="business" 
                    placeholder="Your business name"
                    className="border-gray-300 focus:border-brand-navy"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your bookkeeping needs..."
                    className="min-h-[120px] border-gray-300 focus:border-brand-navy"
                  />
                </div>

                <Button type="submit" variant="professional" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;