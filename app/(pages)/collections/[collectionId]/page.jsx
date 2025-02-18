import { getCollections } from "@/lib/firestore/collections/read_server";
import { getCollection } from "@/lib/firestore/collections/read_server";
import { getProductsByCategory } from "@/lib/firestore/products/read_server";
import { ProductCard } from "@/app/components/Products";

// This function generates static parameters for each collection
export async function generateStaticParams() {
  let collections = [];
  
  try {
    collections = await getCollections();
    if (!collections || collections.length === 0) {
      console.warn("No collections found, returning a fallback set of collections.");
      
      // Provide a fallback (temporary) set of collections if none are found
      collections = [{ id: "fallback1" }, { id: "fallback2" }]; // Example fallback
    }
  } catch (error) {
    console.error("Error fetching collections:", error);
    // Provide fallback if error occurs
    collections = [{ id: "fallback1" }, { id: "fallback2" }];
  }

  // Check and log collections
  console.log("Collections fetched:", collections);
  
  return collections.map((collection) => ({
    collectionId: collection.id, // Ensure collection.id is available
  }));
}

export async function generateMetadata({ params }) {
  const { collectionId } = params;

  // Ensure collectionId is valid
  if (!collectionId) {
    return { title: "Collection not found", description: "Collection ID is missing" };
  }

  const collection = await getCollection({ id: collectionId });

  if (!collection) {
    return { title: "Collection not found", description: "Collection not found" };
  }

  return {
    title: `${collection?.title} | Collection`,
    description: collection?.subTitle ?? "",
    openGraph: {
      images: [collection?.imageURL],
    },
  };
}

export default async function Page({ params }) {
  const { collectionId } = params;

  if (!collectionId) {
    return <div>Collection not found.</div>;
  }

  const collection = await getCollection({ id: collectionId });

  if (!collection) {
    return <div>Collection not found.</div>;
  }

  const products = await getProductsByCategory({ categoryId: collection?.categoryId });

  return (
    <main className="flex justify-center p-5 md:px-10 md:py-5 w-full">
      <div className="flex flex-col gap-6 max-w-[900px] p-5">
        <div className="w-full flex justify-center">
          <img className="h-[110px]" src={collection?.imageURL} alt={collection?.title} />
        </div>
        <h1 className="text-center font-semibold text-4xl">{collection.title}</h1>
        <h2 className="text-center text-gray-500">{collection.subTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-self-center justify-center items-center gap-4 md:gap-5">
          {products?.map((item) => (
            <ProductCard product={item} key={item?.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
