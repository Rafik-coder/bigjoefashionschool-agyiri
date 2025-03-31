export interface NewsType {
  id: number;
  title: string;
  content: string;
  category: string;
  date: Date;
  imageUrl: string;
  slug: string;
}

export interface CourseType {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  imageUrl: string;
}

export interface StaffType {
  id: number;
  name: string;
  phone: string;
  title: string;
  department: string;
  bio: string;
  imageUrl: string;
  level: string;
}

export interface TestimonialsType {
  name: string;
  title: string;
  quote: string;
}
