import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/section-heading";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-neutral-light py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get in Touch" />
        </div>
      </section>

      <section id="contact" className="py-16 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
                Contact Us
              </h2>
              <p className="mt-4 text-gray-600">
                Have questions about our programs or want to visit our center?
                Reach out to us!
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary">
                      Location
                    </h3>
                    <p className="text-gray-600">
                      Techiman, Bono East Region, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary">
                      Phone
                    </h3>
                    <p className="text-gray-600">+233 50 123 4567</p>
                    <p className="text-gray-600">+233 24 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary">
                      Email
                    </h3>
                    <p className="text-gray-600">info@bigagyiri.com</p>
                    <p className="text-gray-600">admissions@bigagyiri.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-400/10 rounded-full flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary">
                      Opening Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://facebook.com"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition hover:bg-primary/90"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition hover:bg-primary/90"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition hover:bg-primary/90"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition hover:bg-primary/90"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-light p-8 rounded-lg">
            <h3 className="font-heading text-2xl font-semibold text-secondary mb-6 text-center">
              Visit Our Campus
            </h3>
            <div className="h-80 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
              <p className="text-gray-500">Locate Us on the Map</p>
            </div>
            <p className="text-center text-gray-600">
              We're located in the heart of Techiman, Bono East Region. Our
              campus features modern facilities including fully equipped sewing
              studios, design labs, and computer facilities for digital fashion
              design.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-black mb-4">
            Ready to Start Your Fashion Journey?
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-6">
            Reach out today to learn more about our programs, schedule a campus
            visit, or begin your application process.
          </p>
          <div className="inline-flex bg-white text-secondary font-bold py-3 px-6 rounded-full">
            Call us now:{" "}
            <Link href="tel:233501234567" className="ml-2 text-blue-500">
              {" "}
              +233 50 123 4567{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
