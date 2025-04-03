// import { Course } from "@/shared/schema";
import { CourseType } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  course: CourseType;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-neutral-light rounded-lg overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden relative bg-gray-300 flex items-center justify-center">
        <Image
          src={course.imageUrl}
          alt="about-img"
          // width={100}
          // height={100}
          fill
          objectFit="cover"
          className="w-16 h-16 object-fit-cover text-gray-400"
        />
        {/* <svg className="h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg> */}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {course.level}
          </span>
          <span className="text-gray-500 text-sm">{course.duration}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-secondary">
          {course.title}
        </h3>
        <p className="mt-2 text-gray-600">{course.description}</p>
        <div className="mt-4 flex justify-between items-center">
          {
            // <Link href={`/courses/${course.id}`} className="text-primary font-medium flex items-center gap-1">
            //   Learn more <ArrowRight className="h-4 w-4" />
            // </Link>
          }
          <span className="font-heading font-bold text-secondary">
            GH₵ {course.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
