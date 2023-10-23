import React from "react";

type TableProps = {
    theadData:string[],
    tbodyData:BodyData[]
}

export type BodyData = {
    id:string;
    items:string[]
}

const Table = (props:TableProps) => {
    console.log("bvgftyujk",props.tbodyData)
    return (
        <div className="relative overflow-x-auto bg-white rounded-md">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs border-b text-gray-700 uppercas dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {
                        props.theadData.map(item=>(
                            <td scope="col" className="px-6 py-3" title={item}>
                                {item}
                            </td>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {props.tbodyData.map((item) => (
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                        {item.items.map((it) => {
                            return <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{it}</td>;
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default Table;
