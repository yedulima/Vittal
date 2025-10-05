import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

export async function login(email: string, password: string) {
	return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

export async function signup(email: string, password: string) {
	return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
}
