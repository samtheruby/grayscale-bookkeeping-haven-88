import { Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e9d055b4-a68c-4039-ae12-cd44bddf2a1a.png" 
                alt="Grayscale Books Logo" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional bookkeeping services for small businesses. 
              Focus on your business growth while we handle your books.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">Monthly Bookkeeping</span></li>
              <li><span className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">Payroll Management</span></li>
              <li><span className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">Financial Reporting</span></li>
              <li><span className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">Tax Preparation</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a 
                  href="tel:718-986-5483" 
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  718-986-5483
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a 
                  href="mailto:chay@grayscalebooks.com" 
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  chay@grayscalebooks.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-400" />
                <p className="text-gray-400">New York Metro Area</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Grayscale Books. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer text-sm">Privacy Policy</span>
              <span className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer text-sm">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;