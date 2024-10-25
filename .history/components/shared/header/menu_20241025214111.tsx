import { ShoppingCart } from 'lucide-react'
import UserButton from './user-button'
import CartButton from './cart-button'

import Link from 'next/link'
const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        <nav className="md:flex hidden w-full max-w-xs gap-3">
   <CartButton>
          <UserButton />
        </nav>
      </div>
    </>
  )
}
export default Menu