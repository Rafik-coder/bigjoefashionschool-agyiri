"use client";
import NewsCard from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { news } from "@/data/news";
import React, { useState } from "react";

const page = () => {
  const [filter, setFilter] = useState<"all" | "news" | "event">("all");

  const filteredNews = news.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <>
      <section className="bg-neutral-light py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="News & Events" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                className={`rounded-l-md rounded-r-none border-blue-300 ${filter === "all" ? "bg-primary text-blue-300 border-white" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button
                variant={filter === "news" ? "default" : "outline"}
                className={`rounded-none border-x-0 border-blue-300 ${filter === "news" ? "bg-primary text-blue-300 border-white" : ""}`}
                onClick={() => setFilter("news")}
              >
                News
              </Button>
              <Button
                variant={filter === "event" ? "default" : "outline"}
                className={`rounded-r-md rounded-l-none border-blue-300 ${filter === "event" ? "bg-primary text-blue-300 border-white" : ""}`}
                onClick={() => setFilter("event")}
              >
                Events
              </Button>
            </div>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">
                No {filter} to display
              </h3>
              <p className="mt-2 text-gray-500">
                Check back later for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-2xl font-semibold text-secondary mb-4 text-center">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Subscribe to our newsletter to receive updates on our latest news,
              events, and fashion tips directly to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
