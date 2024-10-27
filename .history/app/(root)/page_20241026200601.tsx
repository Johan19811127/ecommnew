
import EcommerceFeatures from '@/components/shared/product/ecommerce-features'
import ProductCarousel from '@/components/shared/product/product-carousel'
import ProductList from '@/components/shared/product/product-list'
import ProductPromotion from '@/components/shared/product/product-promotion'
import {
  getFeaturedProducts,
  getLatestProducts,
 export default async function Home() {
      )}
      <div className="space-y-8">
        <ProductList title="Newest Arrivals" data={latestProducts} />
        <ProductPromotion />
        <EcommerceFeatures />
      </div>
    </div>
  )