import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  Timestamp,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "../firebase";

export interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  country?: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  country?: string;
  createdAt?: Timestamp | { seconds: number; nanoseconds: number } | Date | null;
}

/**
 * Format timestamp into user-friendly date/time (e.g., 07/10/2026 12:45)
 */
export const formatEnquiryDate = (createdAt?: any): string => {
  if (!createdAt) return "Just now";

  let date: Date;
  if (typeof createdAt.toDate === "function") {
    date = createdAt.toDate();
  } else if (createdAt instanceof Date) {
    date = createdAt;
  } else if (typeof createdAt === "object" && typeof createdAt.seconds === "number") {
    date = new Date(createdAt.seconds * 1000);
  } else if (typeof createdAt === "string" || typeof createdAt === "number") {
    date = new Date(createdAt);
  } else {
    return "Recent";
  }

  if (isNaN(date.getTime())) return "Recent";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

/**
 * Add a new enquiry to Firestore "enquiries" collection
 */
export const addEnquiry = async (data: EnquiryInput): Promise<string> => {
  try {
    const docData: Record<string, any> = {
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
      service: data.service.trim(),
      message: (data.message || '').trim(),
      createdAt: serverTimestamp(),
    };

    if (data.country && data.country.trim()) {
      docData.country = data.country.trim();
    }

    const docRef = await addDoc(collection(db, "enquiries"), docData);
    return docRef.id;
  } catch (error) {
    console.error("Firestore addEnquiry error:", error);
    throw error;
  }
};

/**
 * Fetch all enquiries ordered by createdAt descending
 */
export const getEnquiries = async (): Promise<Enquiry[]> => {
  try {
    const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        service: data.service || "",
        message: data.message || "",
        country: data.country || "",
        createdAt: data.createdAt || null,
      };
    });
  } catch (error) {
    console.error("Firestore getEnquiries error:", error);
    throw error;
  }
};

/**
 * Listen to real-time updates for enquiries collection
 */
export const subscribeToEnquiries = (
  onUpdate: (enquiries: Enquiry[]) => void,
  onError?: (error: Error) => void
): Unsubscribe => {
  const q = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));

  return onSnapshot(
    q,
    (snapshot) => {
      const enquiries: Enquiry[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          service: data.service || "",
          message: data.message || "",
          country: data.country || "",
          createdAt: data.createdAt || null,
        };
      });
      onUpdate(enquiries);
    },
    (error) => {
      console.error("Firestore subscribeToEnquiries error:", error);
      if (onError) {
        onError(error);
      }
    }
  );
};
