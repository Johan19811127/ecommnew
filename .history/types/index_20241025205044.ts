import { products } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm'
// PRODUCTS
export type Product = InferSelectModel<typeof products>
export type CartItem = z.infer<typeof cartItemSchema>