import Head from 'next/head'
import Image from 'next/image'
import Menu from '@/components/menu'
import MenuCard from '@/components/menuCard'
import ModalMenu from '@/components/modalAddMenu'
import { useState } from 'react'
import Button from '@/components/button'
import { useAppSelector } from '@/store/store'
import NoData from '@/components/emptyData'

export default function Home() {
  const [isShow, setIsShow] = useState<boolean>(false)
  const menus = useAppSelector(state=>state.menu.menus)

  return (
    <div className="bg-skin-fill">
      <ModalMenu
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <div className="dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between flex-col">
        <Menu/>
        <section className="bg-skin-fill bg-zinc-100 mx-8 px-8 w-full rounded-md mt-8 py-4">
          <div className="flex h-16">
            <Button
              title='Add menu'
              onClick={()=>setIsShow(true)}
              type='ALT'
            />
          </div>
          {
            menus.length >0 ?(
              <div className="grid gap-x-8 gap-y-4 grid-cols-5">
                {
                  menus.map(item=>(
                    <MenuCard
                      key={item.id}
                      id={item.id}
                      title={item.name}
                      delete={true}
                      price={item.price}
                    />
                  ))
                }
              </div>
            ):(
              <NoData/>
            )
          }
        </section>
      </div>
    </div>
    </div>
  )
}

