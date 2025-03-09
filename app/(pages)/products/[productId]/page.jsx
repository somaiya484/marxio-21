import { getAllProducts, getProduct } from "@/lib/firestore/products/read_server";
import Photos from "./components/Photos";
import Details from "./components/Details";
import Reviews from "./components/Reviews";
import RelatedProducts from "./components/RelatedProducts";
import AuthContextProvider from "@/contexts/AuthContext";
import AddReview from "./components/AddReiveiw";

// Generate static params for SSG
export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return (
      products?.map((product) => ({
        productId: product.id.toString(), // ✅ Ensure ID is a string
      })) ?? []
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  try {
    const { productId } = params;
    const product = await getProduct({ id: productId });

    if (!product) {
      return {
        title: "Product Not Found",
        description: "The requested product does not exist.",
      };
    }

    return {
      title: `${product.title} | Product`,
      description: product.shortDescription || "",
      openGraph: {
        images: product?.featureImageURL ? [product.featureImageURL] : [], // ✅ Ensuring valid image URL
      },
    };
  } catch (error) {
    console.error("Error fetching product metadata:", error);
    return {
      title: "Error Loading Product",
      description: "There was an error loading this product.",
    };
  }
}

// Product page component
export default async function Page({ params }) {
  try {
    const { productId } = params;
    const product = await getProduct({ id: productId });

    if (!product) {
      return <main className="p-5 md:p-10">Product not found.</main>;
    }

    return (
      <main className="p-5 md:p-10">
        <section className="flex flex-col-reverse md:flex-row gap-3 md:max-w-[1150px]">
          <Photos
            imageList={[product.featureImageURL, ...(product.imageList || [])]}
          />
          <Details product={product} />
        </section>
        <div className="flex justify-center py-10">
          <AuthContextProvider>
            <div className="flex flex-col md:flex-row gap-4 md:max-w-[1050px] w-full">
              <AddReview productId={productId} />
              <Reviews productId={productId} />
            </div>
          </AuthContextProvider>
        </div>
        <RelatedProducts categoryId={product.categoryId} />
      </main>
    );
  } catch (error) {
    console.error("Error loading product page:", error);
    return <main className="p-5 md:p-10">Error loading product.</main>;
  }
}
