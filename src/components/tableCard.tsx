import React, { Dispatch, SetStateAction } from 'react'
import Button from './button'

type TableCardProps = {
    id:number;
    name : string;
    isOccupied : boolean;
    isSelected? :boolean;
    setSelected : Dispatch<SetStateAction<number>>;
}

const TableCard = (props : TableCardProps) => {
    return (
        <div onClick={()=>props.setSelected(props.id)} className={`flex flex-col items-center px-4 py-4 flex-1
        ${props.isSelected ? 'bg-orange-600' : 'bg-white'} 
        ${props.isSelected ? 'text-white' : 'text-gray-900'} cursor-pointer hover:bg-orange-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
            <h3 className='text-lg bold font-medium mb-2'>{props.name}</h3>
            <div className="flex">
                <p className={`${props.isOccupied ? 'text-red-300' : 'text-green-300'}`}>{props.isOccupied ? '(Occupied)' : '(Empty)'}</p>
            </div>
        </div>
    )
}

export default TableCard
