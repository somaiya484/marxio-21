import { getProductIds, getProduct } from "@/lib/firestore/products/read_server";
import Photos from "./components/Photos";
import Details from "./components/Details";
import Reviews from "./components/Reviews";
import RelatedProducts from "./components/RelatedProducts";
import AddReview from "./components/AddReiveiw";
import AuthContextProvider from "@/contexts/AuthContext";

export async function generateMetadata({ params }) {
  const { productId } = params;
  const product = await getProduct({ id: productId });

  return {
    title: `${product?.title} | Product`,
    description: product?.shortDescription ?? "",
    openGraph: {
      images: [product?.featureImageURL],
    },
  };
}

// This function generates static params for the dynamic product page
export async function generateStaticParams() {
  const productIds = await getProductIds(); // Fetch all product IDs from your database
  return productIds.map(id => ({
    productId: id, // This corresponds to the dynamic [productId] in your page path
  }));
}

export default async function Page({ params }) {
  const { productId } = params;
  const product = await getProduct({ id: productId });
  return (
    <main className="p-5 md:p-10">
      <section className="flex flex-col-reverse md:flex-row gap-3">
        <Photos
          imageList={[product?.featureImageURL, ...(product?.imageList ?? [])]}
        />
        <Details product={product} />
      </section>
      <div className="flex justify-center py-10">
        <AuthContextProvider>
          <div className="flex flex-col md:flex-row gap-4 md:max-w-[900px] w-full">
            <AddReview productId={productId} />
            <Reviews productId={productId} />
          </div>
        </AuthContextProvider>
      </div>
      <RelatedProducts categoryId={product?.categoryId} />
    </main>
  );
}
