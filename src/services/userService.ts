import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getFirstUser = async () => {
  try {
    const userRef = doc(db, "users", "firstone");
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      console.log("User document does not exist");
      return null;
    }

    return {
      id: userSnapshot.id,
      ...userSnapshot.data(),
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const loginWithFirestore = async (
  username: string,
  password: string
): Promise<boolean> => {
  try {
    // Get admin document from Firestore
    const userRef = doc(db, "users", "firstone");
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      console.error("Admin document not found");
      return false;
    }

    const data = userSnapshot.data();

    // Check username and password
    if (
      username.trim() === "admin" &&
      password === data.admin
    ) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Firestore login error:", error);
    return false;
  }
};