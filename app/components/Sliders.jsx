"use client";

import dynamic from "next/dynamic";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import AuthContextProvider from "@/contexts/AuthContext";
import AddToCartButton from "./AddToCartButton";

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function FeaturedProductSlider({ featuredProducts }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {featuredProducts?.map((product, key) => (
          <div key={key}>
            <div className="flex flex-col-reverse md:flex-row gap-4 bg-[#f8f8f8] p-5 md:px-24 md:py-20 w-full">
              <div className="flex-1 flex flex-col md:gap-10 gap-4">
                <h2 className="text-gray-500 text-xs md:text-base">NEW FASHION</h2>
                <div className="flex flex-col gap-4">
                  <Link href={`/products/${product?.id}`}>
                    <h1 className="md:text-4xl text-xl font-semibold">
                      {product?.title}
                    </h1>
                  </Link>
                  <p className="text-gray-600 md:text-sm text-xs max-w-96 line-clamp-2">
                    {product?.shortDescription}
                  </p>
                </div>
                <AuthContextProvider>
                  <div className="flex items-center gap-4">
                    <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
                      <button className="bg-orange-500 text-white text-xs md:text-sm px-4 py-1.5 rounded-lg">
                        BUY NOW
                      </button>
                    </Link>
                    <AddToCartButton productId={product?.id} type="large" />
                    <FavoriteButton productId={product?.id} />
                  </div>
                </AuthContextProvider>
              </div>
              <div>
                <Link href={`/products/${product?.id}`}>
                  <img
                    className="h-[14rem] md:h-[23rem]"
                    src={product?.featureImageURL}
                    alt={product?.title || "Featured product"}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
