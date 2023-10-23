import React, { useEffect, useState } from "react";
import Menu from "@/components/menu";
import TableCard from "@/components/tableCard";
import MenuCard from "@/components/menuCard";
import ListOrder from "@/components/ListOrder";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addMenu } from "@/store/features/table";
import NoData from "@/components/emptyData";

const Order = () => {
  const tables = useAppSelector(state=>state.table.tables)
  const [selectedTable, setSelectedTable] = useState<number>(1)
  const menus = useAppSelector(state=>state.menu.menus)
  const dispatch = useAppDispatch()

  return (
    <div className="bg-skin-fill">
      <div className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between flex-col">
        <Menu/>
        <section className="bg-skin-fill bg-zinc-100 mx-8 px-8 w-full rounded-md mt-8 py-4">
          <div className="w-full bg-white dark:bg-gray-800 dark:border-gray-700">
              <div className="flex bg-zinc-100">
                {
                  menus.length >0 ?(
                    <div className="grid gap-x-6 grid-cols-3">
                      {
                        menus.map(item=>(
                          <MenuCard
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            onSelected={()=>dispatch(addMenu({
                              tableId:selectedTable,
                              menu:item
                            }))}
                          />
                        ))
                      }
                    </div>
                  ):(
                    <div className="w-7/12">
                      <NoData/>
                    </div>
                  )
                }
  
                <div className="flex flex-col h-max flex-1">
                  <div className="flex justify-between rounded-lg overflow-hidden shadow-sm ml-4 flex-1 h-max mb-4" role="group">
                    {
                      tables.map(item=>(
                        <TableCard
                          id={item.id}
                          isOccupied={item.isOccupied}
                          name={'Table ' + item.id}
                          isSelected={selectedTable === item.id}
                          setSelected={setSelectedTable}
                        />
                      ))
                    }
                  </div>
                  {
                    tables[selectedTable - 1].isOccupied ? (
                      <ListOrder
                        orders={tables[selectedTable - 1].orders}
                        selectedTable={selectedTable}
                      />
                    ):(
                      <NoData/>
                    )
                  }
                </div>
              </div>
          </div>
           
        </section>
      </div>
      </div>
    </div>
  );
};

export default Order;
