import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-3 w-full bg-orange-400 text-white border-t p-5 md:p-10 mt-10">
      <div className="border-b w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="flex">
          <img className="h-12 rounded" src="/White.png" alt="Logo" />
        </div>
        <div className="flex-1 flex flex-col md:flex-row justify-end gap-4">
          <div className="flex gap-1 items-center">
            <Link href="/about" className="text-sm cursor-pointer">About Us</Link>
          </div>
          <div className="flex gap-1 items-center">
            <a href="tel:+8801828621601" className="flex items-center gap-1 cursor-pointer">
              <Phone size={12} />
              <h2 className="text-sm">+8801828621601</h2>
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <a href="mailto:info.marxio@gmail.com" className="flex items-center gap-1 cursor-pointer">
              <Mail size={12} />
              <h2 className="text-sm">info.marxio@gmail.com</h2>
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <MapPin size={12} />
            <h2 className="text-sm">Bangladesh</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <h3 className="text-xs">
          © {currentYear} . All rights reserved by Marxio
        </h3>
      </div>
    </footer>
  );
}
