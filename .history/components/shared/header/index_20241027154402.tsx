
import Image from 'next/image'
import Link from 'next/link'


import { APP_NAME } from '@/lib/constants'
import Menu from './menu'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { getAllCategories } from '@/lib/actions/product.actions'
const Header = async () => {
  const categories = await getAllCategories()
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline" className="bg-slate-200 me-3">
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Select a category</DrawerTitle>
                <div className="space-y-1">
                  {categories.map((category: { name: string }) => (
                    <Button
                      className="w-full justify-start"
                      variant="ghost"
                      key={category.name}
                      asChild
                    >
                      <DrawerClose asChild>
                        <Link href={`/search?category=${category.name}`}>
                          {category.name}
                        </Link>
                      </DrawerClose>
                    </Button>
                  ))}
                </div>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
          <Link href="/" className="flex-start font-bold">
            <Image
              src="/assets/images/badge.png"
              width={40}
              height={48}
              alt="School badge"
              className="-my-2 mx-3"
            />
            {APP_NAME}
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header