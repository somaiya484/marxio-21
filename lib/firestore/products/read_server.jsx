import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query, where, orderBy } from "firebase/firestore";

// Fetch a specific product by ID
export const getProduct = async ({ id }) => {
  try {
    const data = await getDoc(doc(db, `products/${id}`));
    if (data.exists()) {
      return data.data();  // Return product data
    } else {
      return null;  // Return null if not found
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;  // Handle errors and return null
  }
};

// Fetch featured products
export const getFeaturedProducts = async () => {
  try {
    const list = await getDocs(
      query(collection(db, "products"), where("isFeatured", "==", true))
    );
    return list.docs.map((snap) => snap.data());  // Return featured products
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];  // Return an empty array if there's an error
  }
};

// Fetch all products, ordered by timestamp
export const getProducts = async () => {
  try {
    const list = await getDocs(
      query(collection(db, "products"), orderBy("timestampCreate", "desc"))
    );
    return list.docs.map((snap) => snap.data());  // Return products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];  // Return an empty array if there's an error
  }
};

// Fetch products by category
export const getProductsByCategory = async ({ categoryId }) => {
  try {
    const list = await getDocs(
      query(
        collection(db, "products"),
        orderBy("timestampCreate", "desc"),
        where("categoryId", "==", categoryId)
      )
    );
    return list.docs.map((snap) => snap.data());  // Return products by category
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];  // Return an empty array if there's an error
  }
};