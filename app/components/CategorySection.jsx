import Link from "next/link";

const categories = [
  { imgSrc: "/cate.jpg", link: "/categories/of7m6kr0oUPhntIEh3xE" },
  { imgSrc: "/cate2.jpg", link: "/categories/of7m6kr0oUPhntIEh3xE" },
  { imgSrc: "/cate3.jpg", link: "/categories/BTHP7QKfUhO2y17cZSwe" }, 
  { imgSrc: "/cate4.jpg", link: "/categories/BayUo8OyhsS0F7WrzkqY" },
  { imgSrc: "/Hot-Plate.jpg", link: "/categories/yV6iStZBXeMeS0vgqaAe" },
];

export default function CategorySection() {
  return (
    <div className="max-w-[1200px] mx-auto mt-16 mb-0 h-auto md:h-[500px] px-5 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3 items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <Link href={categories[0].link} className="group">
            <img
              src={categories[0].imgSrc}
              alt="Category 1"
              className="w-full border-8 border-orange-300 h-[200px] sm:h-[250px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <Link href={categories[1].link} className="group">
            <img
              src={categories[1].imgSrc}
              alt="Category 2"
              className="w-full border-8 border-orange-300 h-[200px] sm:h-[250px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Middle Large Image */}
        <Link href={categories[2].link} className="group">
          <img
            src={categories[2].imgSrc}
            alt="Category 3"
            className="w-full border-8 border-orange-300 h-[400px] sm:h-[450px] lg:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          <Link href={categories[3].link} className="group">
            <img
              src={categories[3].imgSrc}
              alt="Category 4"
              className="w-full border-8 border-orange-300 h-[200px] sm:h-[250px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <Link href={categories[4].link} className="group">
            <img
              src={categories[4].imgSrc}
              alt="Category 5"
              className="w-full border-8 border-orange-300 h-[200px] sm:h-[250px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
