import CourseCard from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { courses } from "@/data/courses";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-neutral-light py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Training Programs" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
              Training Focus
            </h2>
            <p className="text-gray-600 max-w-3xl">
              At Big Agyiri Fashion Centre, we offer comprehensive training
              programs designed to equip students with both technical skills and
              business knowledge needed to succeed in the fashion industry. Our
              courses are crafted with a focus on practical, hands-on learning
              and industry relevance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
                Training Activities
              </h2>
              <p className="text-gray-600 mb-6">
                Our diverse training activities provide a comprehensive learning
                experience that balances theory and practice. We focus on
                experiential learning that prepares students for real-world
                challenges in the fashion industry.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">Lectures</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">
                    Practical Sewing
                  </h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">Group Tasks</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">Demonstrations</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">Assignments</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">Fashion Shows</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">Discussions</h3>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-3 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-secondary">Field Trips</h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
                Study Analysis
              </h2>
              <p className="text-gray-600 mb-6">
                Our curriculum includes an in-depth study of various components
                essential to becoming a well-rounded fashion professional.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-secondary text-lg mb-2">
                    Needlework
                  </h3>
                  <p className="text-gray-600">
                    Mastering hand stitching techniques that are essential for
                    fine detailing and finishing.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-secondary text-lg mb-2">
                    Study of Fabrics
                  </h3>
                  <p className="text-gray-600">
                    Understanding different fabric types, their properties, and
                    appropriate applications in fashion design.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-secondary text-lg mb-2">
                    Embroidery
                  </h3>
                  <p className="text-gray-600">
                    Learning decorative stitching techniques to enhance garment
                    aesthetics and value.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-secondary text-lg mb-2">
                    Sewing Safety
                  </h3>
                  <p className="text-gray-600">
                    Proper handling of equipment and workplace safety protocols
                    to prevent accidents.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-medium text-secondary text-lg mb-2">
                    Knitting
                  </h3>
                  <p className="text-gray-600">
                    Basic and advanced knitting techniques for creating textured
                    fabric and garments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center text-black">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Fashion Journey?
            </h2>
            <p className="text-gray-500/80 max-w-2xl mx-auto mb-8">
              Join our community of creative minds and transform your passion
              for fashion into a successful career. Enrollment for the next term
              is now open.
            </p>
            <Button className="px-8 py-3 bg-blue-300 text-white font-accent font-medium rounded-full hover:bg-accent transition shadow-md">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
