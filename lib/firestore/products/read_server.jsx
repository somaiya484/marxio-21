import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

/**
 * Get a single product by ID.
 */
export const getProduct = async ({ id }) => {
  try {
    const docSnap = await getDoc(doc(db, "products", id));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }; // Ensure ID is included
    }
    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

/**
 * Get all products (for static params).
 */
export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "products"), orderBy("timestampCreate", "desc"))
    );

    return querySnapshot.docs.map((snap) => ({
      id: snap.id, // Ensure ID is included
      ...snap.data(),
    }));
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
};

/**
 * Get featured products.
 */
export const getFeaturedProducts = async () => {
  try {
    const list = await getDocs(
      query(collection(db, "products"), where("isFeatured", "==", true))
    );

    return list.docs.map((snap) => ({
      id: snap.id, // Ensure ID is included
      ...snap.data(),
    }));
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
};

/**
 * Get all products (sorted by creation timestamp).
 */
export const getProducts = async () => {
  try {
    const list = await getDocs(
      query(collection(db, "products"), orderBy("timestampCreate", "desc"))
    );

    return list.docs.map((snap) => ({
      id: snap.id, // Ensure ID is included
      ...snap.data(),
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

/**
 * Get products by category ID.
 */
export const getProductsByCategory = async ({ categoryId }) => {
  try {
    const list = await getDocs(
      query(
        collection(db, "products"),
        where("categoryId", "==", categoryId),
        orderBy("timestampCreate", "desc")
      )
    );

    return list.docs.map((snap) => ({
      id: snap.id, // Ensure ID is included
      ...snap.data(),
    }));
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};
