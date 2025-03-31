import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { Link } from "wouter";

const CTASection = () => {
  return (
    <section id="enroll" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-black">
          Start Your Fashion Journey Today
        </h2>
        <p className="mt-4 text-black/80 max-w-2xl mx-auto">
          Join Big Agyiri Fashion Centre and transform your passion for fashion
          into a successful career.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="px-8 py-3 bg-blue-300 text-white font-accent font-medium rounded-full hover:bg-accent transition shadow-md"
          >
            <Link href="/courses">Apply Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-8 py-3 border-2 border-black text-black font-accent font-medium rounded-full hover:bg-blue-300/10 hover:border-blue-300 hover:text-blue-300 transition"
          >
            <Link href="/courses">Explore Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
