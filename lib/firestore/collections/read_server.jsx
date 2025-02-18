import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

// Fetch a specific collection by ID
export const getCollection = async ({ id }) => {
  try {
    const data = await getDoc(doc(db, `collections/${id}`));
    if (data.exists()) {
      return data.data();  // Return collection data
    } else {
      return null;  // Return null if not found
    }
  } catch (error) {
    console.error("Error fetching collection:", error);
    return null;  // Handle errors and return null
  }
};

// Fetch all collections
export const getCollections = async () => {
  try {
    const list = await getDocs(collection(db, "collections"));
    return list.docs.map((snap) => ({
      id: snap.id, // Ensure you're returning the document ID as part of the collection data
      ...snap.data(),
    }));
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];  // Return an empty array if there's an error
  }
};
