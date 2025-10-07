import { FIREBASE_AUTH, FIRESTORE_DB } from "../../FirebaseConfig";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, DocumentReference } from "firebase/firestore";

export async function login(email: string, password: string) {
	return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

export async function signUp(
	email: string,
	password: string,
	name: string,
	phoneNumber: string,
	user_type: string,
	age?: string
) {
	try {
		const userCredentials = await createUserWithEmailAndPassword(
			FIREBASE_AUTH,
			email,
			password
		);
		const user = userCredentials.user;
		const userDocRef: DocumentReference = doc(
			FIRESTORE_DB,
			"users",
			user.uid
		);

		await setDoc(doc(FIRESTORE_DB, "users", user.uid), {
			email,
			name,
			phoneNumber,
			user_type,
			createAt: new Date(),
			...(age && { age }),
		});

		if (user_type === "idoso") {
			const idosoDocRef: DocumentReference = doc(
				FIRESTORE_DB,
				"idosos",
				user.uid
			);

			await setDoc(idosoDocRef, {
				userRef: userDocRef,
				age: age,
			});
		} else if (user_type === "cuidador") {
			const cuidadorDocRef: DocumentReference = doc(
				FIRESTORE_DB,
				"cuidadores",
				user.uid
			);

			await setDoc(cuidadorDocRef, {
				userRef: userDocRef,
				idosos: [],
			});
		} else {
			console.error(
				"Algo inesperado ocorreu no SingUp!\nODIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
			);
		}
	} catch (err: any) {
		const errorCode = err.code;

		switch (errorCode) {
			case "auth/email-already-in-use":
				break;
			case "auth/invalid-email":
				break;
		}
	}
}
