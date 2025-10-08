import { initializeApp } from "firebase/app";
import {
	initializeAuth,
	getReactNativePersistence,
	browserLocalPersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

import { Platform } from "react-native";

let authPersistence;

if (Platform.OS === "web") {
	authPersistence = browserLocalPersistence;
} else {
	authPersistence = getReactNativePersistence(ReactNativeAsyncStorage);
}

import {
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER_ID,
	APP_ID,
	MEASUREMENT_ID,
} from "@env";

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASUREMENT_ID,
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
	persistence: authPersistence,
});
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
