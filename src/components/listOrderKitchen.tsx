import { Order, toogleOrder } from "@/store/features/table";
import { useAppDispatch } from "@/store/store";
import React, {useState} from "react";
import Button from "./button";

type ListKitchenProps = {
    orders:Order[];
    selectedTable:number;
}

const ListKitchen = (props:ListKitchenProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className="w-100 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {
            props.orders.map(item=>(
                <div className="w-full flex px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600 items-center">
                    <input id="link-checkbox" type="checkbox" checked={item.isDone} onChange={()=>dispatch(toogleOrder({
                        tableId:props.selectedTable,
                        menuId:item.id
                    }))} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <div className="flex ml-4">
                        <p className="mr-4 bold">{item.name}</p>
                        <p className="bold ">(x{item.qty})</p> 
                    </div>
                </div>
            ))
        }
    </div>
  );
};

export default ListKitchen;