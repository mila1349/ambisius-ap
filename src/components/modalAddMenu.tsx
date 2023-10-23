import { addMenu } from '@/store/features/menu'
import { useAppDispatch } from '@/store/store'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Button from './button'
import { v4 as uuidv4 } from 'uuid';

type ModalMenuProps = {
    isShow : boolean;
    setIsShow : Dispatch<SetStateAction<boolean>>;
}

const ModalMenu = (props:ModalMenuProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const [menuName, setMenuName] = useState<string>()
    const [price, setPrice] = useState<number>()

    const handleSubmit = async () => {
        setIsLoading(true);
        if(!menuName || !price ){
            return
        }

        dispatch(addMenu({
            id: uuidv4(),
            price:price,
            name:menuName
        }))

        setMenuName('')
        setPrice(0)
        props.setIsShow(false)
        setIsLoading(false);
    }
    return (
        <>
        <div className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full ${props.isShow ? 'flex' : 'hidden'} justify-center items-center bg-gray-200 backdrop-blur-sm bg-opacity-25`}>
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick={()=>props.setIsShow(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add Menu</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Menu Name</label>
                                <input value={menuName} onChange={(e)=>setMenuName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Nasi Goreng" required/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type='number' value={price} onChange={(e)=>setPrice(parseInt(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="30.000" required/>
                            </div>
                            <Button
                                title='Add'
                                onClick={()=>handleSubmit()}
                                type='ALT'
                                full={true}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default ModalMenu
