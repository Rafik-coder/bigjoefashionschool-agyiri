import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
                <Image alt="logo" src={"/logo.png"} width={100} height={100} />
              </div>
              <span className="font-heading font-bold text-xl text-black">
                Big Agyiri
              </span>
            </div>
            <p className="text-black/70">
              Providing top-notch fashion education and training for the youth
              in Ghana since 1998.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-black/60 hover:text-black transition"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-black/60 hover:text-black transition"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-black/60 hover:text-black transition"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="text-black/60 hover:text-black transition"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-black/70">
              <li>
                <Link href="/" className="hover:text-blue-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-300 transition">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/staff" className="hover:text-blue-300 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2 text-black/70">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition"
                >
                  Pattern Making
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition"
                >
                  Advanced Sewing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition"
                >
                  Fashion Design
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition"
                >
                  Fashion Business
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-300 transition"
                >
                  Fashion Illustration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-black/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Techiman, Bono East Region, Ghana</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+233 50 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@bigagyiri.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-black/60">
          <p>
            © {new Date().getFullYear()} Big Agyiri Fashion Centre. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
