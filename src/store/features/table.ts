import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import {Menu} from './menu'

export interface Order  {
    id:string;
    name:string;
    price:number;
    qty:number;
    isDone:boolean;
}

interface Table  {
    id:number;
    isOccupied:boolean;
    orders:Order[]
}

interface TableState {
    tables:Table[];
}

const initialState : TableState = {
    tables: [
        {
            id:1,
            isOccupied:false,
            orders:[]
        },
        {
            id:2,
            isOccupied:false,
            orders:[]
        },
        {
            id:3,
            isOccupied:false,
            orders:[]
        }
    ]
}

export const TableSlice = createSlice({
    name: 'Table',
    initialState,
    reducers: {
        addMenu(state, action: PayloadAction<{tableId:number, menu: Menu}>) {
            //check if have ordered
            const found = state.tables[action.payload.tableId - 1].orders.findIndex(el => el.id === action.payload.menu.id);

            // yes ? change qty
            if(found>=0){
                const qty = state.tables[action.payload.tableId - 1].orders[found].qty
                state.tables[action.payload.tableId - 1].orders[found].qty = qty + 1
            }else{
                // no  ? push menu
                state.tables[action.payload.tableId - 1].isOccupied = true
                state.tables[action.payload.tableId - 1].orders.push({
                    ...action.payload.menu,
                    qty:1,
                    isDone:false,
                })
            }
        },
        decrease(state, action: PayloadAction<{tableId:number, menu: Menu}>){
            const menuIndex = state.tables[action.payload.tableId - 1].orders.findIndex(el => el.id === action.payload.menu.id);
            const qty = state.tables[action.payload.tableId - 1].orders[menuIndex].qty

            if(qty > 1){
                state.tables[action.payload.tableId - 1].orders[menuIndex].qty = qty - 1
            }else{
                state.tables[action.payload.tableId - 1].orders.splice(menuIndex, 1);
            }

            if(state.tables[action.payload.tableId - 1].orders.length == 0){
                state.tables[action.payload.tableId - 1].isOccupied = false
            }
        },
        toogleOrder(state, action: PayloadAction<{tableId:number, menuId: string}>){
            const menuIndex = state.tables[action.payload.tableId - 1].orders.findIndex(el => el.id === action.payload.menuId);
            const doneState = state.tables[action.payload.tableId - 1].orders[menuIndex].isDone

            state.tables[action.payload.tableId - 1].orders[menuIndex].isDone = !doneState
        },
        emptyTable(state, action: PayloadAction<number>){
            state.tables[action.payload - 1] = {
                id:action.payload,
                isOccupied:false,
                orders:[]
            }
        },
        reset(state){
            state.tables = initialState.tables
        }
    },
})

export default TableSlice.reducer;
export const { addMenu, decrease, toogleOrder, emptyTable, reset } = TableSlice.actions;