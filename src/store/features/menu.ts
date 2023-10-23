import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Menu  {
    id:string;
    name:string;
    price:number;
}

interface MenuState {
    menus:Menu[];
}

const initialState : MenuState = {
    menus: []
}

export const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenu(state, action: PayloadAction<Menu>) {
            state.menus.push({
                id:action.payload.id,
                name:action.payload.name,
                price:action.payload.price
            })
        },
        deleteMenu(state, action: PayloadAction<string>) {
            state.menus.splice(state.menus.findIndex((item) => item.id === action.payload), 1);
        },
        reset(state){
            state.menus = []
        }
    },
})

export default MenuSlice.reducer;
export const { addMenu, deleteMenu, reset } = MenuSlice.actions;