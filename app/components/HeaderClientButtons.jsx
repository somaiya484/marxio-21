"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firestore/user/read";
import { Badge } from "@nextui-org/react";
import { Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function HeaderClientButtons() {
  const { user } = useAuth();
  const { data } = useUser({ uid: user?.uid });

  return (
    <div className="flex items-center gap-2">
      {/* Wishlist Button */}
      <Link href={`/favorites`}>
        <button
          title="My Favorites"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm"
        >
          <Heart size={16} className="text-white" />
          WISHLIST
        </button>
      </Link>

      {/* Cart Button */}
      <Link href={`/cart`}>
        <button
          title="My Cart"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm relative"
        >
          <ShoppingBag size={16} className="text-white" />
          BAG
          {data?.carts?.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-white text-orange-500 text-xs rounded-full px-2">
              {data?.carts?.length}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
}
