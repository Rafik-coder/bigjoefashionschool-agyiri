import CourseCard from "@/components/courses/CourseCard";
import CTASection from "@/components/home/CTASection";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import NewsCard from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { courses } from "@/data/courses";
import { news } from "@/data/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { object } from "zod";

export default function Home() {
  const featuredCourses = courses.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <>
      <Hero />
      <Features />

      {/* About Section Preview */}
      <section id="about-preview" className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                About Our Centre
              </h2>
              <p className="mt-4 text-gray-600">
                Big Joe Fashion and Cosmetology School is a vocational training
                institute for fashion designers, fashion training services and
                Cosmetology training services, located in Techiman, Bono East
                Regional capital.
              </p>

              <div className="mt-6 space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-heading text-xl font-semibold text-blue-300">
                    Mission
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Big Joe Fashion and Cosmetology School exists to provide
                    top-notch training in fashion designing, entrepreneurship,
                    customer orientation, and quality service delivery for
                    unemployed youth at an affordable cost.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-heading text-xl font-semibold text-blue-300">
                    Vision
                  </h3>
                  <p className="mt-1 text-gray-600">
                    To become the most desirable fashion and Cosmetology
                    training hub in the Northern sector that provides
                    exceptional and unique fashion training at an affordable
                    cost.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-blue-300"
                >
                  <Link href="/about">Read More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-gray-300 relative overflow-hidden rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={"/images/IMG-20250330-WA0035.jpg"}
                  alt="about-img"
                  fill
                  className="w-16 h-16 object-fit-cover text-gray-400"
                />
              </div>
              <div className="h-64 bg-gray-300 relative overflow-hidden rounded-lg shadow-md mt-8 flex items-center justify-center">
                <Image
                  src={"/images/IMG-20250330-WA0039.jpg"}
                  alt="about-img"
                  fill
                  className="w-16 h-16 object-fit-cover text-gray-400"
                />
              </div>
              <div className="h-64 bg-gray-300 relative overflow-hidden rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={"/images/IMG-20250330-WA0040.jpg"}
                  alt="about-img"
                  fill
                  className="w-16 h-16 object-fit-cover text-gray-400"
                />
              </div>
              <div className="h-64 bg-gray-300 relative overflow-hidden rounded-lg shadow-md mt-8 flex items-center justify-center">
                <Image
                  src={"/images/IMG-20250330-WA0050.jpg"}
                  alt="about-img"
                  fill
                  className="w-16 h-16 object-fit-cover text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        // Images Galary
      }
      <section className="py-16 bg-white">
        <div>
          <SectionHeading
            title="Programs Galary"
            subtitle="Explore our gallery showcasing the journey from aspiring novices to accomplished fashion designers and Cosmetologists."
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 8 }, (_, index) => (
                <div
                  key={index}
                  className="relative w-full h-[200px] bg-red-300 overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={`/images/Cosmetology/IMG-20250404-WA000${index + 2}.jpg`}
                    alt={`about-img-${index}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-12">
              <SectionHeading
                title="Video Gallery"
                subtitle="Watch our videos to get a glimpse of our training programs and facilities."
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Array.from({ length: 10 }, (_, index) => (
                  <div className="relative w-full h-[200px] bg-red-300 overflow-hidden rounded-lg shadow-md">
                    <video
                      src={`/videos/VID-20250330-WA000${index + 1}.mp4`}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section id="courses-preview" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Training Programs"
            subtitle="Comprehensive training programs designed to transform novices into professional fashion designers and Cosmetologists."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-black font-accent font-medium rounded-full hover:bg-secondary/90 transition shadow-md"
            >
              <Link href="/courses">
                View All Courses{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="lightblue"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* News Preview */}
      <section id="news-preview" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Latest News & Events"
            subtitle="Stay updated with the latest happenings at Big Agyiri Fashion and Cosmetology Centre."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-secondary text-secondary font-accent font-medium rounded-full hover:bg-secondary hover:text-white transition"
            >
              <Link href="/news">
                View All News & Events{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
