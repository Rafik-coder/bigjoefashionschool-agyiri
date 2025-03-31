import { PencilRuler, Laptop, Lightbulb, Users } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const features = [
  {
    icon: <PencilRuler className="text-xl text-blue-300" />,
    title: "Skilled Training",
    description: "Learn art fashion styles from experienced professionals.",
  },
  {
    icon: <Laptop className="text-xl text-blue-300" />,
    title: "E-Commerce Integration",
    description: "Learn how to infuse e-commerce into your fashion business.",
  },
  {
    icon: <Lightbulb className="text-xl text-blue-300" />,
    title: "Entrepreneurship",
    description:
      "Develop business skills to become a successful fashion entrepreneur.",
  },
  {
    icon: <Users className="text-xl text-blue-300" />,
    title: "Supportive Community",
    description: "Join a community of creative minds and fashion enthusiasts.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Big Joe Fashion School?"
          subtitle="Our school offers comprehensive fashion education with a focus on practical skills and entrepreneurship."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-light p-6 rounded-lg transition-all hover:shadow-md"
            >
              <div className="w-14 h-14 bg-blue-300/10 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
