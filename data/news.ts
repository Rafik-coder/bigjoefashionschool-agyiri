import { News } from "@/shared/schema";
import { NewsType } from "../types/types";

export const news: NewsType[] = [
  {
    id: 1,
    title: "Annual Fashion Show 2023",
    content:
      "Our students showcase their creative designs at our annual fashion show event. This year's theme is 'Sustainable Fashion' focusing on eco-friendly materials and processes. The event will feature over 50 original designs created by our graduating class, with special guest judges from the Ghanaian fashion industry. Join us for an evening of creativity, innovation, and sustainable fashion solutions.",
    category: "event",
    date: new Date("2023-06-15T18:00:00"),
    imageUrl: "/images/IMG-20250330-WA0057.jpg",
    slug: "annual-fashion-show-2023",
  },
  {
    id: 2,
    title: "New Sewing Equipment Arrived",
    content:
      "We've upgraded our training facility with state-of-the-art sewing machines. The new industrial-grade equipment includes computerized embroidery machines, sergers, and specialized machines for leather and heavy fabrics. This investment will provide our students with hands-on experience using the same technology employed in modern fashion production facilities, better preparing them for careers in the industry.",
    category: "news",
    date: new Date("2023-05-28T09:30:00"),
    imageUrl: "/images/IMG-20250330-WA0062.jpg",
    slug: "new-sewing-equipment-arrived",
  },
  {
    id: 3,
    title: "Partnership with Global Fashion Institute",
    content:
      "We're excited to announce our new partnership with Global Fashion Institute to provide international opportunities for our students. This collaboration will include student exchange programs, international certifications, and masterclasses with renowned fashion designers from around the world. Selected students will also have the opportunity to participate in international fashion weeks and industry events.",
    category: "news",
    date: new Date("2023-05-10T11:00:00"),
    imageUrl: "/images/IMG-20250330-WA0082.jpg",
    slug: "partnership-with-global-fashion-institute",
  },
  {
    id: 4,
    title: "Fashion Entrepreneurs Workshop",
    content:
      "Join us for a two-day intensive workshop on building a successful fashion business in the digital age. Learn from industry experts about e-commerce strategies, social media marketing, supply chain management, and sustainable business practices. The workshop will include hands-on sessions on building your online presence, pricing strategies, and connecting with manufacturers. Open to current students and alumni.",
    category: "event",
    date: new Date("2023-07-22T09:00:00"),
    imageUrl: "/images/IMG-20250330-WA0091.jpg",
    slug: "fashion-entrepreneurs-workshop",
  },
  {
    id: 5,
    title: "Student Wins National Design Competition",
    content:
      "We're proud to announce that Akosua Mensah, a final-year student at Big Agyiri Fashion Centre, has won first place in the National Young Designers Competition. Her collection, inspired by traditional Kente patterns with modern interpretations, impressed the judges with its originality, craftsmanship, and commercial viability. This achievement highlights the quality of training and mentorship provided at our institution.",
    category: "news",
    date: new Date("2023-04-15T14:00:00"),
    imageUrl: "/images/IMG-20250330-WA0077.jpg",
    slug: "student-wins-national-design-competition",
  },
  // {
  //   id: 6,
  //   title: "Enrollment Now Open for September 2023",
  //   content: "Applications are now being accepted for our September 2023 intake. Programs available include Pattern Making, Fashion Design, Advanced Sewing, Fashion Business, and our new Digital Fashion Marketing course. Early applicants can benefit from our scholarship programs and payment plans. Visit our campus or contact our admissions office for more information about the application process and entrance requirements.",
  //   category: "news",
  //   date: new Date("2023-06-01T10:00:00"),
  //   imageUrl: "/images/IMG-20250330-WA0033.jpg",
  //   slug: "enrollment-now-open-for-september-2023"
  // }
];
