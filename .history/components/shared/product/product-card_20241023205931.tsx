import Image from 'next/image'
   import Link from 'next/link'
   import React from 'react'
   import { Card, CardContent, CardHeader } from '@/components/ui/card'

   const ProductCard = ({ product }: { product: any }) => {
     return (
       <Card className="w-full max-w-sm">
         <CardHeader className="p-0 items-center">
           <Link href={`/product/${product.slug}`}>
             <Image
               alt={product.name}
               className=" object-cover rounded"
               height={500}
               src={product.images![0]}
               width={400}
             />
           </Link>
         </CardHeader>
         <CardContent className="p-4 grid gap-4">
          
           <div className="grid gap-1.2">
             <Link href={`/product/${product.slug}`}>
               <h2 className="font-bold">{product.name}</h2>
             </Link>
           </div>
           <div className="flex-between gap-4">
             <p>{product.rating} stars</p>
             {product.stock > 0 ? (
               <p className="font-bold">${product.price}</p>
             ) : (
               <p className="text-destructive">Out of Stock</p>
             )}
           </div>
         </CardContent>
       </Card>
     )
   }
   export default ProductCard