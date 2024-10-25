import { notFound } from 'next/navigation'
import ProductImages from '@/components/shared/product/product-images'
import ProductPrice from '@/components/shared/product/product-price'
import { Card, CardContent } from '@/components/ui/card'
import { getProductBySlug } from '@/lib/actions/product.actions'
import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'

import AddToCart from '@/components/shared/product/add-to-cart'
import { getMyCart } from '@/lib/actions/cart.actions'
import { round2 } from '@/lib/utils'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: `${product.name} - ${APP_NAME}`,
    description: product.description,
  }
}
const ProductDetails = async ({
  params: { slug },
}: {
  params: { slug: string }
  searchParams: { page: string; color: string; size: string }
}) => {
  const product = await getProductBySlug(slug)
  if (!product) notFound()
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-2">
            <ProductImages images={product.images!} />
          </div>
          <div className="col-span-2 flex flex-col w-full  gap-8 p-5">
            <div className="flex flex-col gap-1-">
             
              <h1 className="h3-bold">{product.name}</h1>
              <p className="text-slate-600 font-bold text-md mb-5">
              {product.category}
              </p>
           
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
                <div className="flex gap-1">
                  <ProductPrice
                    value={Number(product.price)}
                    className="p-bold-20 rounded-full bg-blue-500/10 px-5 py-2 text-blue-700"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Description:</p>
              <p className="text-sm text-justify">{product.description}</p>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <p className="text-slate-500 text-md font-bold">In stock</p>
                  ) : (
                    <p className="text-red-500 text-md font-bold">Out of Stock</p>
                  )}
                </div>
                {product.stock !== 0 && (
                <div className="mb-2 flex justify-between">
                  <div>Stock on Hand:</div>
                 
                    <p className='font-bold'>{product.stock}</p>
             
                </div>
                )}
                {product.stock !== 0 && (
                  <div className=" flex-center">
                       <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: round2(product.price),
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          </div>
      </section>
    </>
  )
}
export default ProductDetails
