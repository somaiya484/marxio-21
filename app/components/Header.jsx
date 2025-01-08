import { Search, UserCircle2 } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import AuthContextProvider from "@/contexts/AuthContext";
import HeaderClientButtons from "./HeaderClientButtons";
import AdminButton from "./AdminButton";

export default function Header() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];
  return (
    <main>

      <nav className="top-0 z-50 bg-white backdrop-blur-2xl px-4 md:px-10 flex items-center justify-between text-gray-600 fixed w-full border-b-1">
        <Link href={"/"}>
          <img className="h-10 md:h-16" src="/Marxio.jpg" alt="Logo" />
        </Link>
        <div className="hidden md:flex gap-2 items-center font-semibold">
          {menuList?.map((item) => {
            return (
              <Link href={item?.link}>
                <button className="px-4 py-2 rounded-lg hover:bg-gray-50 text-black">
                  {item?.name}
                </button>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-1">
          <AuthContextProvider>
            <AdminButton />
          </AuthContextProvider>
          <Link href={`/search`}>
            <button
              title="Search Products"
              className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
            >
              <Search size={20} />
            </button>
          </Link>
          <AuthContextProvider>
            <HeaderClientButtons />
          </AuthContextProvider >
          <Link href={`/account`}>
            <button
              title="My Account"
              className="h-8 w-8 flex justify-center items-center rounded-full hover:bg-gray-50"
            >
              <UserCircle2 size={20} />
            </button>
          </Link>
          <AuthContextProvider>
            <LogoutButton />
          </AuthContextProvider>
        </div>
      </nav>

      {/* <img className="mt-16" src="/banner.png" alt="" /> */}
    </main>
  );
}
