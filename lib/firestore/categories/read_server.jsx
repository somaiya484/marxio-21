import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

// Fetch a specific category by ID
export const getCategory = async ({ id }) => {
  try {
    const data = await getDoc(doc(db, `categories/${id}`));
    if (data.exists()) {
      return data.data();  // Return category data
    } else {
      return null;  // Return null if not found
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return null;  // Handle errors and return null
  }
};

// Fetch all categories
export const getCategories = async () => {
  try {
    const list = await getDocs(collection(db, "categories"));
    return list.docs.map((snap) => snap.data());  // Return all categories
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];  // Return an empty array if there's an error
  }
};
