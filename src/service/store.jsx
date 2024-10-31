import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const user_reducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        user_reducer
    },

    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
			},
	}),
})

export default store