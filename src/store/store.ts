import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MenuSlice } from "./features/menu";
import { TableSlice } from "./features/table";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";

const reducers = combineReducers({
    menu: MenuSlice.reducer,
    table: TableSlice.reducer
});

const persistConfig = {
    key: 'reduxState',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const useAppDispatch:()=>typeof  store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;