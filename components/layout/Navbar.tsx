"use client";
import { useState } from "react";
// import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [location] = useLocation();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
    { path: "/news", label: "News" },
    { path: "/staff", label: "Staff" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-blue-300 font-bold">
                <Image alt="logo" src={"/logo.png"} width={100} height={100} />
              </div>
              <span className="font-heading font-bold text-xl text-secondary">
                Big Joe <span className="text-primary">Fashion School</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-accent text-sm font-medium ${
                  isActive(link.path)
                    ? "text-blue-300"
                    : "text-secondary hover:text-blue-300"
                } transition`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 px-6 py-2 bg-primary text-blue-300 font-accent text-sm font-medium rounded-full hover:bg-primary/90 transition"
            >
              <Link href="/courses">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-secondary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={closeMenu}
                  className={`font-accent text-sm font-medium ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  } py-2 transition`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full text-center px-6 py-2 bg-primary text-blue-300 font-accent text-sm font-medium rounded-full hover:bg-primary/90 transition"
                onClick={closeMenu}
              >
                <Link href="/courses">Enroll Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
