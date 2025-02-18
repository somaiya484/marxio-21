import { getCategory, getCategories } from "@/lib/firestore/categories/read_server"; // Import both getCategory and getCategories
import { getProductsByCategory } from "@/lib/firestore/products/read_server";
import { ProductCard } from "@/app/components/Products";

// This function generates static parameters for each category
export async function generateStaticParams() {
  // Ensure getCategories is working and returning an array
  const categories = await getCategories();  // Fetch all categories
  
  if (!categories || categories.length === 0) {
    throw new Error("No categories found.");  // Handle the case where categories are empty
  }

  return categories.map((category) => {
    // Ensure category.id exists and is valid
    if (!category.id) {
      console.error("Category ID missing:", category);
      return {}; // Return empty object if no valid id exists
    }

    return { categoryId: category.id };
  });
}

export async function generateMetadata({ params }) {
  const { categoryId } = params;

  // Ensure categoryId is valid
  if (!categoryId) {
    return { title: "Category not found", description: "Category ID is missing" };
  }

  const category = await getCategory({ id: categoryId });

  if (!category) {
    return { title: "Category not found", description: "Category not found" };
  }

  return {
    title: category.title ?? "Category",
    description: category.subTitle ?? "",
    openGraph: {
      images: [category.imageURL],
    },
  };
}

export default async function Page({ params }) {
  const { categoryId } = params;
  const category = await getCategory({ id: categoryId });
  
  if (!category) {
    // Handle the case where the category is not found
    return <div>Category not found.</div>;
  }

  const products = await getProductsByCategory({ categoryId });

  return (
    <main className="flex justify-center p-5 md:px-10 md:py-5 w-full">
      <div className="flex flex-col gap-6 max-w-[900px] p-5">
        <div className="w-full flex justify-center">
          <img className="h-[110px]" src={category?.imageURL} alt={category?.title} />
        </div>
        <h1 className="text-center font-semibold text-4xl">{category.title}</h1>
        <h2 className="text-center text-gray-500">{category.subTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-self-center justify-center items-center gap-4 md:gap-5">
          {products?.length > 0 ? (
            products.map((item) => <ProductCard product={item} key={item?.id} />)
          ) : (
            <p className="text-center">No products available in this category.</p>
          )}
        </div>
      </div>
    </main>
  );
}
