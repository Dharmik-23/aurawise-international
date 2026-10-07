import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";

import { auth } from "../firebase";

/**
 * Admin login
 */
export const loginAdmin = async (
  email: string,
  password: string
): Promise<User> => {
  const normalizedEmail = email.trim();

  if (!normalizedEmail || !password) {
    throw new Error("Email and password are required.");
  }

  const result = await signInWithEmailAndPassword(
    auth,
    normalizedEmail,
    password
  );

  return result.user;
};

/**
 * Admin logout
 */
export const logoutAdmin = async (): Promise<void> => {
  await signOut(auth);
};

/**
 * Listen for Firebase authentication state changes
 */
export const subscribeToAuthState = (
  callback: (user: User | null) => void
) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Get currently authenticated Firebase user
 */
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};