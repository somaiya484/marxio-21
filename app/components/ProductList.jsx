"use client";
import { useState } from "react";
import { ProductCard } from "@/app/components/Products";

export default function ProductList({ products }) {
  const [visibleCount, setVisibleCount] = useState(8); // Show 8 products initially

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-self-center justify-center items-center gap-4 md:gap-5">
        {products.length > 0 ? (
          products.slice(0, visibleCount).map((item) => (
            <ProductCard product={item} key={item.id} />
          ))
        ) : (
          <p className="text-center">No products available in this category.</p>
        )}
      </div>

      {/* "See More" Button */}
      {visibleCount < products.length && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setVisibleCount(products.length)}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
