// import { Link } from "wouter";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { NewsType } from "@/types/types";
import Image from "next/image";

interface NewsCardProps {
  item: NewsType;
}

const NewsCard = ({ item }: NewsCardProps) => {
  const formattedDate = format(new Date(item.date), "MMMM d, yyyy");

  return (
    <div className="bg-neutral-light rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden relative bg-gray-300 flex items-center justify-center">
        <div className="h-12 w-12 text-gray-400">
          <Image
            src={item.imageUrl}
            alt="about-img"
            fill
            className="w-16 h-16 object-fit-cover text-gray-400"
          />
        </div>
        {/* <svg className="h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg> */}
        <div className="absolute top-0 left-0 bg-blue-300 text-white px-3 py-1 m-3 rounded-full text-sm font-medium">
          {item.category === "event" ? "Event" : "News"}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-secondary">
          {item.title}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-2">
          {item.content.substring(0, 100)}...
        </p>
        <Link
          href={`/news/${item.slug}`}
          className="mt-4 inline-block text-primary font-medium"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
