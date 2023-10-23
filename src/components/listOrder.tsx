import { addMenu, decrease, Order } from "@/store/features/table";
import { useAppDispatch } from "@/store/store";
import React, {useState} from "react";
import Button from "./button";

type ListOrderProps = {
    orders:Order[];
    selectedTable:number;
}

const ListOrder = (props:ListOrderProps) => {
  const dispatch = useAppDispatch()

  return (
    <div className="w-100 ml-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {
            props.orders.map(item=>(
                <div key={item.id} className="w-full flex px-4 py-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600 justify-between items-center">
                    <div className="flex">
                        <p className="mr-4 bold">{item.name}</p>
                        <p className="bold ">(x{item.qty})</p> 
                    </div>
                    <div className="flex">
                        <Button title="+" onClick={()=> dispatch(addMenu({
                          tableId:props.selectedTable,
                          menu:{
                            id:item.id,
                            name:item.name,
                            price:item.price}
                        }))} type='ALT'/>
                        <Button title="-" onClick={()=> dispatch(decrease({
                          tableId:props.selectedTable,
                          menu:{
                            id:item.id,
                            name:item.name,
                            price:item.price}
                        }))}
                        type='ALT'/>
                    </div>
                </div>
            ))
        }
    </div>
  );
};

export default ListOrder;

function dispatch(arg0: any): void {
    throw new Error("Function not implemented.");
}
