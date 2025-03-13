import ProductList from "@/app/components/ProductList";
import { getCategory, getCategories } from "@/lib/firestore/categories/read_server";
import { getProductsByCategory } from "@/lib/firestore/products/read_server";

export async function generateStaticParams() {
  const categories = await getCategories();
  
  if (!categories || categories.length === 0) {
    throw new Error("No categories found.");
  }

  return categories.map((category) => ({
    categoryId: category.id,
  }));
}

export async function generateMetadata({ params }) {
  const { categoryId } = params;
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
    return <div>Category not found.</div>;
  }

  const products = await getProductsByCategory({ categoryId });

  return (
    <main className="flex justify-center p-5 md:px-10 md:py-5 w-full">
      <div className="flex flex-col gap-6 max-w-[1100px] p-5">
        <div className="w-full flex justify-center">
          <img className="h-[110px]" src={category.imageURL} alt={category.title} />
        </div>
        <h1 className="text-center font-semibold text-4xl">{category.title}</h1>
        <h2 className="text-center text-gray-500">{category.subTitle}</h2>

        {/* Pass category and products to the client component */}
        <ProductList products={products} />
      </div>
    </main>
  );
}
