import React, { useEffect, useState } from "react";
import Menu from "@/components/menu";
import TableCard from "@/components/tableCard";
import Table, { BodyData } from "@/components/table";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Button from "@/components/button";
import { emptyTable } from '@/store/features/table'
import NoData from "@/components/emptyData";
import { numericFormatter } from 'react-number-format';

const Cashier = () => {
  const tables = useAppSelector(state=>state.table.tables)
  const [selectedTable, setSelectedTable] = useState<number>(1)
  const [formattedOrders, setFormattedOrders] = useState<BodyData[]>([])
  const dispatch = useAppDispatch()
  const [total, setTotal] = useState<string>()

  useEffect(()=>{
    let tot = 0
    let temp:BodyData[]=[]

    tables[selectedTable - 1].orders.map(order=>{
      tot += order.price * order.qty

      temp.push({
        id: order.id,
        items: [
          order.name, order.qty.toString(), 
          `${numericFormatter(order.price.toString(), {thousandSeparator: true, decimalScale: 0, prefix:'Rp. '})}`,
          `${numericFormatter((order.price * order.qty).toString(), {thousandSeparator: true, decimalScale: 0, prefix:'Rp. '})}`
        ],  
      })
    })

    setTotal(numericFormatter(tot.toString(), {thousandSeparator: true, decimalScale: 0, prefix:'Rp. '}))
    setFormattedOrders(temp)
  },[tables, selectedTable])

  return (
    <div className="bg-skin-fill">
      <div className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between flex-col">
        <Menu/>
        <section className="bg-skin-fill bg-zinc-100 mx-8 px-8 w-full rounded-md mt-8 py-4">
          <div className="w-full dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col h-max flex-1 g-zinc-100">
                  <div className="flex justify-between overflow-hidden shadow-sm flex-1 h-max mb-4 rounded-md" role="group">
                  {
                    tables.map(item=>(
                      <TableCard
                        key={item.id}
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
                    tables[selectedTable-1].isOccupied ? (
                      <>
                      <Table
                        theadData={["Menu Name","Qty","Price","Sub Total"]}
                        tbodyData={formattedOrders}
                      />
                      <div className="mt-8">
                        <Button
                          title={`Print Receipt ${total}`}
                          onClick={()=>dispatch(emptyTable(selectedTable))}
                          type='ALT'
                          full={true}
                        />
                      </div>
                      </>
                    ):(
                      <NoData/>
                    )
                  }
                </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Cashier;
