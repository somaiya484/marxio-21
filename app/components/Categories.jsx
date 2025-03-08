"use client";
import Link from "next/link";
import Slider from "react-slick";

export default function Categories({ categories }) {
  var settings = {
    dots: false,
    infinite: true, 
    speed: 6000, 
    slidesToShow: 5,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 0, 
    cssEase: "linear", 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 justify-center overflow-hidden md:p-10 p-5 md:max-w-[1300px] mx-auto">
      <Slider {...settings}>
        {(categories.length <= 2 ? [...categories, ...categories, ...categories] : categories).map(
          (category, index) => (
            <Link key={category.id || index} href={`/categories/${category.id}`}>
              <div className="px-2">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="md:h-32 md:w-32 h-24 w-24 rounded-full md:p-5 p-2 border overflow-hidden">
                    <img src={category.imageURL} alt={category.name || "Category"} />
                  </div>
                  <h1 className="font-semibold">{category.name}</h1>
                </div>
              </div>
            </Link>
          )
        )}
      </Slider>
    </div>
  );
}
