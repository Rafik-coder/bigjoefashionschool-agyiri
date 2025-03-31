import StaffCard from "@/components/staff/StaffCard";
import SectionHeading from "@/components/ui/section-heading";
import { getStaffByLevel } from "@/data/staff";
import Link from "next/link";
import React from "react";

const page = () => {
  const leadership = getStaffByLevel("leadership");
  const departmentHeads = getStaffByLevel("department_head");
  const instructors = getStaffByLevel("instructor");

  return (
    <>
      <section className="bg-neutral-light py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Team" />
        </div>
      </section>

      {/* Leadership */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-semibold text-secondary text-center mb-8">
            CEO
          </h3>
          <div className="flex justify-center">
            {leadership.map((leader) => (
              <StaffCard key={leader.id} staff={leader} variant="leadership" />
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-6 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-semibold text-secondary text-center mb-8">
            Principals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((head) => (
              <StaffCard key={head.id} staff={head} variant="department" />
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-semibold text-secondary text-center mb-8">
            Our Instructors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instructors.map((instructor: any) => (
              <StaffCard
                key={instructor.id}
                staff={instructor}
                variant="instructor"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-6 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-heading text-2xl font-semibold text-secondary mb-4 text-center">
              Join Our Team
            </h3>
            <p className="text-gray-600 text-center mb-6">
              We're always looking for talented professionals who are passionate
              about fashion education to join our team. If you're interested in
              making a difference in the lives of aspiring fashion designers,
              we'd love to hear from you.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-blue-300 text-white font-medium rounded-lg hover:bg-blue-300/90 transition"
              >
                Send Us Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
