import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Monthly Bookkeeping",
      description: "Complete monthly bookkeeping services including transaction recording, account reconciliation, and financial statement preparation.",
      features: ["Transaction categorization", "Bank reconciliation", "Monthly reports"]
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "Comprehensive payroll services including employee payments, tax withholdings, and quarterly payroll tax filings.",
      features: ["Employee payments", "Tax withholdings", "Quarterly filings"]
    },
    {
      icon: FileText,
      title: "Financial Reporting",
      description: "Detailed financial reports including profit & loss statements, balance sheets, and cash flow analysis.",
      features: ["P&L statements", "Balance sheets", "Cash flow analysis"]
    },
    {
      icon: TrendingUp,
      title: "Tax Preparation Support",
      description: "Year-end tax preparation assistance and ongoing tax planning to help minimize your tax liability.",
      features: ["Year-end preparation", "Tax planning", "Deduction optimization"]
    },
    {
      icon: DollarSign,
      title: "Accounts Receivable",
      description: "Manage your customer invoicing and collections to improve cash flow and reduce outstanding receivables.",
      features: ["Invoice management", "Collections support", "Cash flow improvement"]
    },
    {
      icon: Clock,
      title: "QuickBooks Setup",
      description: "Professional QuickBooks setup and training to ensure your accounting system is properly configured.",
      features: ["System setup", "Chart of accounts", "User training"]
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive bookkeeping solutions designed to keep your small business 
            financially organized and compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-gradient-card border-gray-200 hover:shadow-medium transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-navy/20 transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-brand-navy" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-brand-navy rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;