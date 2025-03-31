// import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
              We Teach. We Learn.
              <br />
              <span className="text-primary">You Explore and Create.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-md">
              Big Joe Fashion School provides top-notch training in fashion
              designing, entrepreneurship, and quality service delivery for
              unemployed youth at an affordable cost.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="px-8 py-3 bg-primary text-blue-300 font-accent font-medium rounded-full hover:bg-primary/90 transition shadow-md"
              >
                <Link href="/courses">Start Your Journey</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-3 border-2 border-secondary text-secondary font-accent font-medium rounded-full hover:bg-secondary hover:text-blue-300 transition"
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-blue-300 bg-gray-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src={"/images/IMG-20250330-WA0066.jpg"}
                    alt="s"
                    width={100}
                    height={100}
                    // className="h-6 w-6 text-gray-500"
                  />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg> */}
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-blue-300 bg-gray-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src={"/images/IMG-20250330-WA0067.jpg"}
                    alt="s"
                    width={100}
                    height={100}
                    // className="h-6 w-6 text-gray-500"
                  />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg> */}
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-blue-300 bg-gray-300 flex items-center justify-center overflow-hidden">
                  <Image
                    src={"/images/IMG-20250330-WA0068.jpg"}
                    alt="s"
                    width={100}
                    height={100}
                    // className="h-6 w-6 text-gray-500"
                  />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg> */}
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Joined by{" "}
                <span className="font-semibold text-primary">500+</span>{" "}
                students
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl bg-gray-300 flex items-center justify-center">
              <Image
                src={"/images/IMG-20250330-WA0065.jpg"}
                alt="s"
                // width={100}
                // height={100}
                fill
                className="w-24 h-24 object-object-fit-cover text-gray-400"
              />
              {/* <svg className="w-24 h-24 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg> */}
              <div className="absolute inset-0 bg-secondary/20"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                  <svg
                    className="h-6 w-6 text-secondary "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold">25+ Years</p>
                  <p className="text-sm text-gray-500">Of Fashion Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-pattern"></div>
    </section>
  );
};

export default Hero;
