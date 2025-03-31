import { StaffType } from "@/types/types";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

interface StaffCardProps {
  staff: StaffType;
  variant?: "leadership" | "department" | "instructor";
}

const StaffCard = ({ staff, variant = "department" }: StaffCardProps) => {
  if (variant === "leadership") {
    return (
      <div className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          <div className="w-full h-64 relative bg-gray-300 flex items-center justify-center">
            <Image
              src={staff.imageUrl}
              alt="about-img"
              fill
              className="w-16 h-16 text-gray-400"
            />
            //{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              //{" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
              //{" "}
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h4 className="font-heading text-xl font-bold text-white">
              {staff.name}
            </h4>
            <p className="text-white/90">{staff.title}</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600">{staff.bio}</p>
          <div className="mt-4 flex gap-3">
            <a href="#" className="text-primary hover:text-primary/80">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-primary hover:text-primary/80">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "instructor") {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm p-4 text-center">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-300 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h4 className="font-heading font-semibold text-secondary">
          {staff.name}
        </h4>
        <p className="text-sm text-primary">{staff.title}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 relative overflow-hidden bg-gray-300 flex items-center justify-center">
        <Image
          src={staff.imageUrl}
          alt="about-img"
          fill
          className="w-12 h-12 text-gray-400"
        />
        //{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          //{" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
          //{" "}
        </svg>
      </div>
      <div className="p-6">
        <h4 className="font-heading text-xl font-semibold text-secondary">
          {staff.name}
        </h4>
        <p className="text-primary font-medium">{staff.title}</p>
        <p className="mt-2 text-gray-600">{staff.bio}</p>
        <div className="mt-4 flex gap-3">
          <a href="#" className="text-gray-400 hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
