

import {  Headset, ShoppingBag, WalletCards, Truck } from 'lucide-react'
const EcommerceFeatures = () => {
  return (
    <div className="">
     
        <div className="grid gap-4 md:grid-cols-2 lgf px-4 py-8">
          <div className="space-y-2 text-center">
            <ShoppingBag className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">Shop when it suits you.</div>
            <div className="text-sm text-muted-foreground">
              Shop from the comfort of your own house, at a time that is right for you.
            </div>
          </div>
          <div className="space-y-2 text-center">
            <Truck className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">Free Delivery</div>
            <div className="text-sm text-muted-foreground">
              Free Delivery TO MV Learners within five days straight to their class.
            </div>
          </div>
          <div className="space-y-2">
            <WalletCards />
            <div className="text-sm font-bold">Flexible Payment</div>
            <div className="text-sm text-muted-foreground">
              Pay with multiple credit cards
            </div>
          </div>
          <div className="space-y-2">
            <Headset />
            <div className="text-sm font-bold">724 Support</div>
            <div className="text-sm text-muted-foreground">
              support customers
            </div>
          </div>
        </div>
     
    </div>
  )
}
export default EcommerceFeatures