"use client";
import { useEffect, useState } from "react";
import { getProductReviewCounts } from "@/lib/firestore/products/count/read";
import MyRating from "./MyRating";

export default function RatingReview({ productId }) {
  const [counts, setCounts] = useState(null);

  useEffect(() => {
    const fetchReviewCounts = async () => {
      try {
        const reviewCounts = await getProductReviewCounts({ productId });
        setCounts(reviewCounts);
      } catch (error) {
        console.error("Error fetching review counts:", error);
      }
    };

    fetchReviewCounts();
  }, [productId]);

  if (!counts)
    return <p className="text-xs text-gray-400">Loading reviews...</p>;

  return (
    <div className="flex gap-3 items-center">
      <MyRating value={counts?.averageRating ?? 0} />
      <h1 className="text-xs text-gray-400">
        <span>{counts?.averageRating?.toFixed(1)}</span> ({counts?.totalReviews})
      </h1>
    </div>
  );
}
