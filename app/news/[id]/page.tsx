"use client";
import NewsCard from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { news } from "@/data/news";
import { ArrowLeft, Calendar, Link } from "lucide-react";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Image from "next/image";

const page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [location, setLocation] = useState("");

  const currentNews = news.find((item) => item.slug === pathname.split("/")[2]);
  const relatedNews = news
    .filter((item) => item.slug !== pathname.split("/")[2])
    .filter((item) => item.category === currentNews?.category)
    .slice(0, 3);

  if (!currentNews) {
    setTimeout(() => {
      setLocation("/news");
    }, 0);
    return null;
  }

  // const formattedDate = format(new Date(currentNews.date), "MMMM d, yyyy");
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(currentNews.date));

  return (
    <>
      <section className="bg-neutral-light py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            className="mb-4"
            onClick={() => router.push("/news")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Button>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary">
            {currentNews.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
            <span className="mx-2">•</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              {currentNews.category === "event" ? "Event" : "News"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8 h-[300px] relative md:h-[400px] bg-gray-300 rounded-lg flex items-center justify-center">
            <Image
              src={currentNews.imageUrl}
              alt={currentNews.title}
              fill
              className="w-24 h-24 object-cover rounded-lg"
            />
            //{" "}
            <svg
              className="h-24 w-24 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              //{" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
              //{" "}
            </svg>
          </div>

          <div className="prose prose-lg max-w-none">
            {currentNews.content
              .split("\n\n")
              .map((paragraph: any, index: any) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>

          <div className="mt-8 flex gap-4">
            <Button asChild variant="outline">
              <Link href="/news">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
              </Link>
            </Button>

            {currentNews.category === "event" && (
              <Button asChild>
                <Link href="/contact">Register for Event</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {relatedNews.length > 0 && (
        <section className="py-12 bg-neutral-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={`Related ${currentNews.category === "event" ? "Events" : "News"}`}
              subtitle={`More ${currentNews.category === "event" ? "events" : "news"} you might be interested in`}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default page;
