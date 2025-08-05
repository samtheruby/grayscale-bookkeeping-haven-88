import { Star } from "lucide-react";

const Testimonials = () => {
  // Placeholder reviews - replace with actual Google reviews when available
  const reviews = [
    {
      name: "Sarah Johnson",
      business: "Local Restaurant Owner",
      rating: 5,
      text: "Grayscale Books transformed our chaotic bookkeeping into a streamlined system. Their attention to detail and monthly reports give us clarity we never had before.",
      date: "2 weeks ago"
    },
    {
      name: "Mike Chen",
      business: "Construction Contractor", 
      rating: 5,
      text: "Professional, reliable, and always available when we need them. They've saved us countless hours and helped us understand our financials better.",
      date: "1 month ago"
    },
    {
      name: "Lisa Rodriguez",
      business: "Retail Shop Owner",
      rating: 5,
      text: "The best decision we made for our business. Their payroll management is flawless and their monthly financial reports are incredibly helpful.",
      date: "3 months ago"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Client Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients say about working with Grayscale Books
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-gray-700 mb-4 italic">
                "{review.text}"
              </p>
              
              {/* Reviewer info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-brand-navy">{review.name}</p>
                <p className="text-sm text-gray-600">{review.business}</p>
                <p className="text-xs text-gray-500 mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              Based on Google Reviews
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Leave us a review on Google to help other businesses find us
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;