import { StaffType } from "@/types/types";

export const staff: StaffType[] = [
  // Leadership
  {
    id: 1,
    name: "AGYIRI MOHAMMED JUNIOR",
    phone: "055 564 7831",
    title: "Founder & Director",
    department: "Administration",
    bio: "Fashion design expert with over 25 years of experience. Passionate about empowering youth through fashion education.",
    imageUrl: "/staff/ceo/p4.jpg",
    level: "leadership",
  },

  // Department Heads
  {
    id: 2,
    name: "Yeboah Eric",
    phone: "024 675 2277",
    title: "Principal",
    department: "Pattern Design",
    bio: "Expert in pattern drafting with 15 years of industry experience.",
    imageUrl: "/staff/principal/p2.jpg",
    level: "department_head",
  },
  // {
  //   id: 3,
  //   name: "Kwame Mensah",
  //   phone: "Kwame Mensah",
  //   title: "Head of Fashion Business",
  //   department: "Business",
  //   bio: "Fashion entrepreneur with expertise in e-commerce and digital marketing.",
  //   imageUrl: "/staff",
  //   level: "department_head"
  // },
  // {
  //   id: 4,
  //   name: "Abena Owusu",
  //   phone: "Abena Owusu",
  //   title: "Head of Creative Design",
  //   department: "Design",
  //   bio: "Award-winning fashion designer with international experience.",
  //   imageUrl: "/staff",
  //   level: "department_head"
  // },

  // Instructors
  {
    id: 5,
    name: "Grace Amoah",
    phone: "Grace Amoah",
    title: "Sewing Instructor",
    department: "Sewing",
    bio: "Specialized in advanced sewing techniques for various fabric types.",
    imageUrl: "/staff",
    level: "instructor",
  },
  {
    id: 6,
    name: "Daniel Adjei",
    phone: "Daniel Adjei",
    title: "Digital Marketing",
    department: "Business",
    bio: "Expert in digital marketing strategies for fashion brands.",
    imageUrl: "/staff",
    level: "instructor",
  },
  {
    id: 7,
    name: "Mercy Danso",
    phone: "Mercy Danso",
    title: "Pattern Design",
    department: "Pattern Design",
    bio: "Specializes in innovative pattern cutting techniques.",
    imageUrl: "/staff",
    level: "instructor",
  },
  {
    id: 8,
    name: "Joseph Kumi",
    phone: "Joseph Kumi",
    title: "Fashion Drawing",
    department: "Design",
    bio: "Professional illustrator with background in fashion sketching.",
    imageUrl: "/staff",
    level: "instructor",
  },
];

export const getStaffByLevel = (level: string) => {
  return staff.filter((member) => member.level === level);
};
