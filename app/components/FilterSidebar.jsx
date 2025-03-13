"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterSidebar({ categories, brands }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get("brand") || "");

  const handleFilterChange = (type, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(type, value);
    } else {
      params.delete(type);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <aside className="w-1/4 p-5 border-r">
      <div>
        <h3 className="font-bold mb-2">Category</h3>
        {categories.map((cat) => (
          <div key={cat.id}>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat.id}
              onChange={() => handleFilterChange("category", cat.id)}
            />
            <label className="ml-2">{cat.title}</label>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h3 className="font-bold mb-2">Brand</h3>
        {brands.map((brand) => (
          <div key={brand.id}>
            <input
              type="radio"
              name="brand"
              checked={selectedBrand === brand.id}
              onChange={() => handleFilterChange("brand", brand.id)}
            />
            <label className="ml-2">{brand.name}</label>
          </div>
        ))}
      </div>
    </aside>
  );
}
