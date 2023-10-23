import { useAppDispatch } from '@/store/store';
import React from 'react'
import Button from './button'
import { NumericFormat } from 'react-number-format';
import { deleteMenu } from '@/store/features/menu'

type MenuCardProps = {
    id:string;
    title : string;
    img? : string;
    delete? : boolean;
    price: number;
    onSelected?: () => void;
}

const MenuCard = (props : MenuCardProps) => {
    const dispatch = useAppDispatch()

    return (
        <div className="max-w-xs w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-fit mb-4">
            <div className="p-3">
                <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                <p className='mb-2 text-sm text-rose-500 font-bold'>
                    <NumericFormat value={props.price} allowLeadingZeros thousandSeparator="," prefix='Rp. '/>
                </p>
                <div className="flex flex-col">
                    {
                        props.onSelected && (
                            <Button
                            title='Select'
                            onClick={()=>props.onSelected && props.onSelected()}
                            type='ALT'
                            full={true}
                        />
                        )
                    
                    }
                    {
                        props.delete && 
                            <Button
                            title='Delete'
                            onClick={()=>dispatch(deleteMenu(props.id))}
                            type='ALT'
                            full={true}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuCard
