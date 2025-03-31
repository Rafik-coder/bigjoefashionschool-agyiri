import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Students Say"
          subtitle="Hear from our graduates who have transformed their passion into successful careers."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-light p-6 rounded-lg relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black">
                <Quote className="h-4 w-4" />
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
