import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-5 w-full bg-orange-400 text-white p-6 md:p-10 mt-10">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left border-b pb-6">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/White.png" alt="Logo" width={120} height={50} />
            <p className="mt-3 text-sm">Your one-stop shop <br /> for home essentials!</p>
            <div className="flex space-x-3 mt-4">
              <a href="https://www.facebook.com/MarxioShop" className="text-white hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg">Top Categories</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/categories/M7TdNEhyUZHurxw6CJFS">Lamp</Link></li>
              <li><Link href="/categories/YELLimWrxFIeas4j2PYC">Blender</Link></li>
              <li><Link href="/categories/a3PpVz84BJSMjwsq8ety">Iron</Link></li>
              <li><Link href="/categories/bxkNjUA2hxyFpJpdtdPU">Rice Cooker</Link></li>
              <li><Link href="/categories/cAwBCbQZ7ncxfGdy0c5n">Stove</Link></li>
              <li><Link href="/categories/yV6iStZBXeMeS0vgqaAe">Induction</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-semibold text-lg">Help</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Refund Policy</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/categories/of7m6kr0oUPhntIEh3xE">Eid Collection</Link></li>
              <li><Link href="/categories/efXisYOcU5F97vhVMVNw">Skin-care Beauty</Link></li>
              <li><Link href="/categories/b5P1AgWnOIwR4Mlknf5e">Air Conditioner</Link></li>
              <li><Link href="/categories/BayUo8OyhsS0F7WrzkqY">Refrigerator & Freezer</Link></li>
              <li><Link href="/categories/JeWjYpL50c8jwckb0w9H">Washing Machine</Link></li>
              <li><Link href="/categories/GG4xNmfE2iyY8QQ9sIkL">Microwave and Electric oven</Link></li>
              <li><Link href="/categories/BTHP7QKfUhO2y17cZSwe">Home Appliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-center md:text-left">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm justify-center md:justify-start">
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <a href="tel:+8801828621601">+8801828621601</a>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <a href="mailto:info.marxio@gmail.com">info.marxio@gmail.com</a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>Bangladesh</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-5 md:mt-0">
            <p className="text-xs">© {currentYear} All rights reserved by Marxio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
