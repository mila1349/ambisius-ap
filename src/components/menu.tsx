import { reset as resetMenu} from '@/store/features/menu'
import { reset as resetTable } from '@/store/features/table'
import { useAppDispatch } from '@/store/store'
import React from 'react'
import Button from './button'
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Menu = () => {
     const pathname = usePathname()
     const dispatch = useAppDispatch()
     console.log("ftyhj",pathname)

     const handleReset = () =>{
          dispatch(resetMenu())
          dispatch(resetTable())
     }

    return (
        <>
        <section className="bg-skin-fill bg-zinc-100 mx-8 px-8 w-full rounded-md">
           <div className="container mx-auto flex justify-between">
           <ul className="flex flex-wrap items-center justify-between py-4 gap-2">

               <Link href="/">
               <li className={`cursor-pointer ${pathname == '/' ? 'bg-orange-600 text-white' : 'bg-white text-gray-900'} focus:outline-none hover:bg-orange-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2  drop-shadow-md`}>
                Menu
               </li>
               </Link>

               <Link href="/order">
               <li className={`text-gray-900 cursor-pointer ${pathname == '/order' ? 'bg-orange-600 text-white' : 'bg-white text-gray-900'} focus:outline-none hover:bg-orange-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2  drop-shadow-md`}>
                Order
               </li>
               </Link>

               <Link href="/kitchen">
               <li className={`text-gray-900 cursor-pointer ${pathname == '/kitchen' ? 'bg-orange-600 text-white' : 'bg-white text-gray-900'} focus:outline-none hover:bg-orange-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2  drop-shadow-md`}>
                Kitchen
               </li>
               </Link>

               <Link href="/cashier">
               <li className={`text-gray-900 cursor-pointer ${pathname == '/cashier' ? 'bg-orange-600 text-white' : 'bg-white text-gray-900'} focus:outline-none hover:bg-orange-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2  drop-shadow-md`}>
                Cashier
               </li>
               </Link>

           </ul>
           <div className="flex flex-wrap items-center justify-between py-4 gap-4">
                <Button
                     title='Reset'
                     onClick={()=>handleReset()}
                />
           </div>
           </div>
        </section>
       </>
    )
}

export default Menu
