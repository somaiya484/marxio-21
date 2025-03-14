"use client";
import Link from "next/link";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import AuthContextProvider from "@/contexts/AuthContext";
import AddToCartButton from "./AddToCartButton";
import { getProductReviewCounts } from "@/lib/firestore/products/count/read";
import { Suspense } from "react";
import MyRating from "./MyRating";

export default function ProductsGridView({ products }) {
  const [visibleCount, setVisibleCount] = useState(30);
  const showMore = () => setVisibleCount(products.length);

  return (
    <section className="w-[80%] mx-auto md:w-full flex justify-center">
      <div className="flex flex-col gap-5 max-w-[1100px] p-5">
        <h1 className="text-center font-semibold text-lg">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 ">
          {products?.slice(0, visibleCount).map((item) => (
            <ProductCard product={item} key={item?.id} />
          ))}
        </div>
        {visibleCount < products.length && (
          <button
            onClick={showMore}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg mx-auto text-sm">
            See More
          </button>
        )}
      </div>
    </section>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-3  p-4 rounded h-full shadow">
      <div className="relative w-full"> {/* Adjusted height */}
        <div className="h-[270px]">
        <img
          src={product?.featureImageURL}
          className="rounded h-[270px] w-full object-cover"  // Set height to 100% and use h-full for flexibility
          alt={product?.title}
        />
        </div>
        <div className="absolute top-1 right-1">
          <AuthContextProvider>
            <FavoriteButton productId={product?.id} />
          </AuthContextProvider>
        </div>
      </div>

      <Link href={`/products/${product?.id}`}>
        <h1 className="font-semibold line-clamp-2 text-sm">{product?.title}</h1>
      </Link>

      <div>
        <h2 className="text-green-500 text-sm font-semibold">
          ৳ {product?.salePrice}
        </h2>

        <h2 className="line-through text-xs text-gray-600">
          ৳ {product?.price}
        </h2>
      </div>

      <p className="text-xs text-gray-500 line-clamp-2">{product?.shortDescription}</p>

      <Suspense>
        <RatingReview product={product} />
      </Suspense>

      {product?.stock <= (product?.orders ?? 0) && (
        <div className="flex">
          <h3 className="text-red-500 rounded-lg text-xs font-semibold">
            Out Of Stock
          </h3>
        </div>
      )}

      <div className="flex items-center gap-4 w-full mt-auto">
        <div className="w-full">
          <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
            <button className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg text-xs w-full">
              Buy Now
            </button>
          </Link>
        </div>
        <AuthContextProvider>
          <AddToCartButton productId={product?.id} />
        </AuthContextProvider>
      </div>
    </div>
  );
}

async function RatingReview({ product }) {
  const counts = await getProductReviewCounts({ productId: product?.id });
  return (
    <div className="flex gap-3 items-center">
      <MyRating value={counts?.averageRating ?? 0} />
      <h1 className="text-xs text-gray-400">
        <span>{counts?.averageRating?.toFixed(1)}</span> ({counts?.totalReviews})
      </h1>
    </div>
  );
}
