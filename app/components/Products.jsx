// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import FavoriteButton from "./FavoriteButton";
// import AuthContextProvider from "@/contexts/AuthContext";
// import AddToCartButton from "./AddToCartButton";
// import { getProductReviewCounts } from "@/lib/firestore/products/count/read";
// import MyRating from "./MyRating";

// // ProductsGridView Component
// export default function ProductsGridView({ products }) {
//   const [visibleCount, setVisibleCount] = useState(30);
//   const sortedProducts = products?.slice().reverse();
//   const visibleProducts = sortedProducts?.slice(0, visibleCount);

//   const handleSeeMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 30, products.length));
//   };

//   return (
//     <AuthContextProvider> {/* Wrap the whole section with AuthContextProvider */}
//       <section className="w-full flex justify-center mt-20 px-5">
//         <div className="flex flex-col gap-5 p-5">
//           <h1 className="text-center font-semibold text-2xl">Products</h1>
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
//             {visibleProducts?.map((item) => (
//               <ProductCard product={item} key={item.id} />
//             ))}
//           </div>

//           {visibleCount < products.length && (
//             <div className="flex justify-center mt-5">
//               <button
//                 onClick={handleSeeMore}
//                 className="bg-amber-500 text-white px-6 py-2 rounded-lg text-sm"
//               >
//                 See More
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </AuthContextProvider>
//   );
// }

// // ProductCard Component
// function ProductCard({ product }) {
//   return (
//     <div className="flex flex-col gap-3 border p-4 rounded-lg">
//       <div className="relative w-full">
//         <Image
//           src={product?.featureImageURL || "/placeholder.jpg"}
//           width={300}
//           height={200}
//           className="rounded-lg object-cover w-full h-48"
//           alt={product?.title || "Product Image"}
//           loading="lazy"
//         />
//         <div className="absolute top-1 right-1">
//           <FavoriteButton productId={product?.id} />
//         </div>
//       </div>

//       <Link href={`/products/${product?.id}`}>
//         <h1 className="font-semibold line-clamp-2 text-sm">{product?.title}</h1>
//       </Link>

//       <div>
//         <h2 className="text-green-500 text-sm font-semibold">
//           ৳ {product?.salePrice}{" "}
//           <span className="line-through text-xs text-gray-600">
//             ৳ {product?.price}
//           </span>
//         </h2>
//       </div>

//       <p className="text-xs text-gray-500 line-clamp-2">{product?.shortDescription}</p>

//       <RatingReview productId={product?.id} /> {/* No Suspense needed here */}

//       {product?.stock <= (product?.orders ?? 0) && (
//         <div className="flex">
//           <h3 className="text-orange-500 rounded-lg text-xs font-semibold">Out Of Stock</h3>
//         </div>
//       )}

//       <div className="flex items-center gap-4 w-full">
//         <Link href={`/checkout?type=buynow&productId=${product?.id}`} className="w-full">
//           <button className="bg-orange-400 text-white px-4 py-2 rounded-lg text-xs w-full">
//             Buy Now
//           </button>
//         </Link>
//         <AddToCartButton productId={product?.id} />
//       </div>
//     </div>
//   );
// }

// // RatingReview Component
// async function RatingReview({ productId }) {
//   try {
//     const counts = await getProductReviewCounts({ productId });
//     return (
//       <div className="flex gap-3 items-center">
//         <MyRating value={counts?.averageRating ?? 0} />
//         <h1 className="text-xs text-gray-400">
//           <span>{counts?.averageRating?.toFixed(1)}</span> ({counts?.totalReviews})
//         </h1>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching review counts:", error);
//     return (
//       <div className="flex gap-3 items-center">
//         <MyRating value={0} />
//         <h1 className="text-xs text-gray-400">Error loading reviews</h1>
//       </div>
//     );
//   }
// }



import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import AuthContextProvider from "@/contexts/AuthContext";
import AddToCartButton from "./AddToCartButton";
import { getProductReviewCounts } from "@/lib/firestore/products/count/read";
import { Suspense } from "react";
import MyRating from "./MyRating";

export default function ProductsGridView({ products }) {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col gap-5 max-w-[900px] p-5">
        <h1 className="text-center font-semibold text-lg">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {products?.map((item) => {
            return <ProductCard product={item} key={item?.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-3 border p-4 rounded-lg">
      <div className="relative w-full">
        <img
          src={product?.featureImageURL}
          className="rounded-lg h-48 w-full object-cover"
          alt={product?.title}
        />
        <div className="absolute top-1 right-1">
          <AuthContextProvider>
            <FavoriteButton productId={product?.id} />
          </AuthContextProvider>
        </div>
      </div>
      <Link href={`/products/${product?.id}`}>
        <h1 className="font-semibold line-clamp-2 text-sm">{product?.title}</h1>
      </Link>
      <div className="">
        <h2 className="text-green-500 text-sm font-semibold">
          ₹ {product?.salePrice}{" "}
          <span className="line-through text-xs text-gray-600">
            ₹ {product?.price}
          </span>
        </h2>
      </div>
      <p className="text-xs text-gray-500 line-clamp-2">
        {product?.shortDescription}
      </p>
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
      <div className="flex items-center gap-4 w-full">
        <div className="w-full">
          <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
            <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-xs w-full">
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
        <span>{counts?.averageRating?.toFixed(1)}</span> ({counts?.totalReviews}
        )
      </h1>
    </div>
  );
}