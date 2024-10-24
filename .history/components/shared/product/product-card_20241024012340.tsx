
import Link from 'next/link'
import ProductPrice from './product-price'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Product } from '@/types'
import Image from 'next/image'

const ProductCard = ({ product }: { product: Product }) => {
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
          
           <div className="grid gap-1">
             <Link href={`/product/${product.slug}`}>
               <h2 className="font-bold">{product.name}</h2>
             </Link>
           </div>
           <div className="flex-between gap-2">
             <p className='text-sm'> {product.category}</p>
             {product.stock > 0 ? (
               <ProductPrice value={Number(product.price)} />
             ) : (
               <p className="text-destructive text-sm font-semibold">Out of Stock</p>
             )}
           </div>
         </CardContent>
       </Card>
     )
   }
   export default ProductCard