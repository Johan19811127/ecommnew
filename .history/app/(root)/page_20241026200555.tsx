
import EcommerceFeatures from '@/components/shared/product/ecommerce-features'
import ProductCarousel from '@/components/shared/product/product-carousel'
import ProductList from '@/components/shared/product/product-list'
import ProductPromotion from '@/components/shared/product/product-promotion'
import {
  getFeaturedProducts,
  getLatestProducts,
@@ -15,6 +17,8 @@ export default async function Home() {
      )}
      <div className="space-y-8">
        <ProductList title="Newest Arrivals" data={latestProducts} />
        <ProductPromotion />
        <EcommerceFeatures />
      </div>
    </div>
  )