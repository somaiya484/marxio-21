import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 w-full bg-gray-700 text-white border-t p-5 md:p-10 mt-10">
      <div className="border-b w-full flex flex-col md:flex-row md:justify-between gap-3">
        <div className="flex">
          <img className="h-16 rounded" src="/Marxio.jpg" alt="Logo" />
        </div>
        <div className="flex-1 flex flex-col md:flex-row justify-end gap-4">
          <div className="flex gap-2 items-center">
            <Phone size={12} className="text-orange-500" />
            <h2 className="text-sm">+91 910 XXXXXXX</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Mail size={12} className="text-orange-500" />
            <h2 className="text-sm">rajendraaverma@gmail.com</h2>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={12} className="text-orange-500" />
            <h2 className="text-sm">New Delhi</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <h3 className="text-xs">
          © 2025 . All rights reserved by Marxio
        </h3>
      </div>
    </footer>
  );
}
