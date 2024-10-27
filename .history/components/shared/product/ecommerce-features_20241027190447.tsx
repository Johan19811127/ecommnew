

import {ShoppingBag, Truck, Ruler, Undo2 , LockKeyhole } from 'lucide-react'
const EcommerceFeatures = () => {
  return (
    <div className="">
      <h2 className="h2-bold text-center">Features</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 px-4 py-8">
          <div className="space-y-2 text-center lg:mx-5 xl:mx-2">
            <ShoppingBag className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">Shop when it suits you.</div>
            <div className="text-sm text-muted-foreground">
              Shop from the comfort of your own house, at a time that is right for you.
            </div>
          </div>
          <div className="space-y-2 text-center lg:mx-5 xl:mx-2">
            <Truck className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">Free Delivery</div>
            <div className="text-sm text-muted-foreground">
            Free Delivery to MV Learners – Delivered to Their Class Within 5 Days!
            </div>
          </div>
          <div className="space-y-2 text-center lg:mx-5 xl:mx-2">
            <Ruler className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">The perfect fit</div>
            <div className="text-sm text-muted-foreground">
             Get the perfect fit of any item with the help of our new sizing charts.
            </div>
          </div>
          <div className="space-y-2 text-center lg:mx-5 xl:mx-2">
            <Undo2 className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">Easy Returns</div>
            <div className="text-sm text-muted-foreground">
              If you have ordered the wrong size return it with the learner for the correct one.
            </div>
          </div>
          <div className="space-y-2 text-center lg:mx-5 xl:mx-2">
            <LockKeyhole className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">Save and Secure</div>
            <div className="text-sm text-muted-foreground">
              Your info is save and secure and will not be shared with any third part
            </div>
          </div>
          <div className="space-y-2 text-center lg:mx-5 xl:mx-2">
            <ShoppingBag className="w-10 h-10 mx-auto" />
            <div className="text-sm font-bold">Shop when it suits you.</div>
            <div className="text-sm text-muted-foreground">
              Shop from the comfort of your own house, at a time that is right for you.
            </div>
          </div>
        </div>
     
    </div>
  )
}
export default EcommerceFeatures