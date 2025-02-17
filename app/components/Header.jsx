"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  Search,
  UserCircle2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AuthContextProvider from "@/contexts/AuthContext";
import HeaderClientButtons from "./HeaderClientButtons";
import AdminButton from "./AdminButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Header() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categoryList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(categoryList);
    };
    fetchCategories();
  }, []);

  const menuList = [
    { name: "TV", link: "/TV" },
    { name: "Fan", link: "/Fan" },
    { name: "Fridge", link: "/Fridge" },
    { name: "AC", link: "/AC" },
    { name: "Washing", link: "/about" },
    { name: "Lamp", link: "/Lamp" },
    { name: "Stove", link: "/Stove" },
    { name: "Microwave", link: "/Microwave" },
    { name: "Kettle", link: "/Kettle" },
    { name: "Iron", link: "/Iron" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-lg shadow-md md:py-3 pt-2 md:pt-2 px-4 border-b w-full">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <Link href="/">
          <img className="h-8 md:h-10" src="/Marxio.png" alt="Logo" />
        </Link>

        {/* Search Bar - Visible on md+ screens */}
        <div className="hidden md:flex flex-grow mx-6 border border-gray-300 rounded-full overflow-hidden max-w-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-grow p-2 outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 flex items-center">
            <Search size={20} />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
            <AdminButton />
          <AuthContextProvider>
          </AuthContextProvider>
          <AuthContextProvider>
            <HeaderClientButtons />
          </AuthContextProvider>
          <Link href="/account">
            <button
              title="My Account"
              className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-gray-100"
            >
              <UserCircle2 size={22} />
            </button>
          </Link>
          <AuthContextProvider>
            <LogoutButton />
          </AuthContextProvider>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center">
          <AuthContextProvider>
            <AdminButton />
          </AuthContextProvider>
          <AuthContextProvider>
            <HeaderClientButtons />
          </AuthContextProvider>
          <Link href="/account">
            <button
              title="My Account"
              className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-gray-100"
            >
              <UserCircle2 size={24} />
            </button>
          </Link>
          <AuthContextProvider>
            <LogoutButton />
          </AuthContextProvider>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3 mt-2">
        <div className="border border-gray-300 rounded-full flex overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow p-2 outline-none"
          />
          <button className="bg-orange-500 text-white px-4 py-2 flex items-center">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-3 items-center font-semibold max-w-screen-2xl mx-auto mt-3">
        {/* Product Dropdown with Scroll */}
        <div className="relative group">
          <button
            className="text-sm pr-4 py-2 flex items-center gap-1 rounded-lg hover:bg-gray-50"
            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
          >
            Products <ChevronDown size={16} />
          </button>

          {categories.length > 0 && (
            <div
              className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 
                 ${isProductMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              onMouseLeave={() => setIsProductMenuOpen(false)}
            >
              <div className="max-h-[400px] overflow-y-auto">
                {categories.map((category) => (
                  <Link key={category.id} href={`/categories/${category.id}`}>
                    <button
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => setIsProductMenuOpen(false)}
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {menuList.map((item) => (
          <Link key={item.name} href={item.link}>
            <button className="text-sm px-2 py-1 rounded-lg hover:bg-gray-50">{item.name}</button>
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          {menuList.map((item) => (
            <Link key={item.name} href={item.link}>
              <button
                className="text-lg font-semibold text-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </button>
            </Link>
          ))}

          <div>
            <button
              className="text-lg font-semibold flex justify-between w-full"
              onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            >
              Products <ChevronDown size={18} />
            </button>

            {isProductMenuOpen && categories.length > 0 && (
              <div className="mt-2 flex flex-col space-y-2 h-[300px] overflow-y-auto">
                {categories.map((category) => (
                  <Link key={category.id} href={`/categories/${category.id}`}>
                    <button
                      className="text-gray-700 text-left"
                      onClick={() => {
                        setIsProductMenuOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
