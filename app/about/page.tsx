import SectionHeading from "@/components/ui/section-heading";
import {
  BarChart3,
  CheckCircle,
  Clock,
  Heart,
  Palette,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  const values = [
    { icon: <Clock className="text-primary" />, label: "Timeliness" },
    { icon: <Heart className="text-primary" />, label: "Empathy" },
    { icon: <CheckCircle className="text-primary" />, label: "Honesty" },
    { icon: <User className="text-primary" />, label: "Punctuality" },
    { icon: <Palette className="text-primary" />, label: "Creativity" },
    { icon: <BarChart3 className="text-primary" />, label: "Profitability" },
  ];

  return (
    <>
      <section className="bg-neutral-light py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Big Agyiri Fashion Centre" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Big Agyiri Fashion Centre is a vocational training institute for
                fashion designers and fashion training services, located in
                Techiman, Bono East Regional capital. The center is duly
                registered under the Ghana Company's Code Act 2019 (Act 992)
                dated 29th December 2020.
              </p>
              <p className="text-gray-600 mb-4">
                The centre trains young people between the ages of 16 to 25
                years and produces quality clothing for both sexes within and
                outside Ghana. With vast experience in training unemployed
                youth, the institution emphasizes objectivity and value-based
                education.
              </p>
              <p className="text-gray-600">
                We provide a platform to infuse e-commerce into fashion
                business, skilled training in art fashion styles, and
                entrepreneurial development for aspiring fashion designers in a
                conducive learning environment.
              </p>
            </div>

            <div className="h-[400px] relative bg-gray-300 rounded-lg shadow-xl flex items-center justify-center">
              <Image
                src="/images/IMG-20250330-WA0079.jpg"
                alt="about-img"
                // width={100}
                // height={100}
                fill
                // objectFit="cover"
                className="w-24 h-24 object-fit-cover text-gray-400"
              />
              {
                // <svg
                //   className="h-24 w-24 text-gray-400"
                //   xmlns="http://www.w3.org/2000/svg"
                //   fill="none"
                //   viewBox="0 0 24 24"
                //   stroke="currentColor"
                // >
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth={1}
                //     d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                //   />
                // </svg>
              }
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Mission Statement
              </h3>
              <p className="text-gray-600">
                Big Asyiri Fashion Centre exists to provide top-notch training
                in fashion designing, entrepreneurship, customer orientation,
                and quality service delivery for unemployed youth at an
                affordable cost.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Vision Statement
              </h3>
              <p className="text-gray-600">
                To become the most desirable fashion and training hub in the
                Northern sector that provides exceptional and unique fashion
                training at an affordable cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our operations and interactions with students and the community."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-neutral-light p-6 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  {value.icon}
                </div>
                <span className="font-medium text-secondary">
                  {value.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary mb-6">
                Training Focus Areas
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      Manipulating color
                    </p>
                    <p className="text-gray-600 text-sm">
                      Learn color theory and how to combine colors effectively
                      in fashion design.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      Drafting patterns
                    </p>
                    <p className="text-gray-600 text-sm">
                      Master the art of creating custom patterns for various
                      garment styles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Sewing</p>
                    <p className="text-gray-600 text-sm">
                      Learn professional sewing techniques for different fabric
                      types.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">Sketching</p>
                    <p className="text-gray-600 text-sm">
                      Develop skills in fashion illustration and technical
                      drawing.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      Creating and forecasting trends
                    </p>
                    <p className="text-gray-600 text-sm">
                      Learn to analyze and predict fashion trends in the
                      industry.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary mb-6">
                Business Skills
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      Fashion entrepreneurship
                    </p>
                    <p className="text-gray-600 text-sm">
                      Develop business skills to launch and operate a fashion
                      brand.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      Social media for business
                    </p>
                    <p className="text-gray-600 text-sm">
                      Learn to leverage social platforms to market fashion
                      products.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      Customer handling
                    </p>
                    <p className="text-gray-600 text-sm">
                      Master customer service skills specific to the fashion
                      industry.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      Quality service delivery
                    </p>
                    <p className="text-gray-600 text-sm">
                      Learn to maintain high standards in fashion production.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="SWOT Analysis" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-light p-6 rounded-lg shadow-md">
              <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                Strengths
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Strategic location</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Committed Board of Directors</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Highly qualified and experienced staff</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Machinery and materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>25 years in fashion designing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>High student population</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Already a household name in the municipality</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-light p-6 rounded-lg shadow-md">
              <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                Weaknesses
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Lack of capital</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Renting cost</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Electricity cost</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Lack of hi-tech sewing and pattern machinery</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-light p-6 rounded-lg shadow-md">
              <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                Opportunities
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Low interest rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Low inflation</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-light p-6 rounded-lg shadow-md">
              <h3 className="font-heading text-xl font-bold text-secondary mb-4">
                Threats
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Unfavourable government tax policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>High exchange rate</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Lack of raw materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Lack of access to loan facilities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0"></div>
                  <span>Political instability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Objectives"
            subtitle="Big Agyiri Fashion Centre is committed to the following objectives:"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                Quality Training
              </h3>
              <p className="text-gray-600">
                Provide fashion training to the teeming unemployed youth with
                practical, hands-on methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                Service Excellence
              </h3>
              <p className="text-gray-600">
                Maintain quality service delivery in all aspects of our
                operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                Professionalism
              </h3>
              <p className="text-gray-600">
                Ensure professionalism and excellence at its peak in our
                teaching methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                Creativity
              </h3>
              <p className="text-gray-600">
                Foster creativity of ideas and innovative thinking in fashion
                design.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                05
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                Affordability
              </h3>
              <p className="text-gray-600">
                Provide affordable tuition to the unemployed youth to ensure
                accessibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                06
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                Holistic Development
              </h3>
              <p className="text-gray-600">
                Provide practical, interactive training with extracurricular
                activities like sports and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
