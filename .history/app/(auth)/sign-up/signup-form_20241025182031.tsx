
‎README.md
+110
-4


Original file line number	Original file line	Diff line number	Diff line change
@@ -1,7 +1,113 @@
# Build ECommerce Like Amazon By Next.js, Postgres and Shadcn
# Build Full-ECommerce By Next.js 14, PostgreSQL, Drizzle Orm and Shadcn
|                |                                                             |
| -------------- | ----------------------------------------------------------- |
| Tech           | Next.js 14, PostgreSQL, Drizzle Orm, Shadcn, PayPal, Stripe |
| UI             | Tailwind, Shadcn, recharts                                  |
| Database       | PostgreSQL, Drizzle Orm                                     |
| Payment        | PayPal, Stripe                                              |
| Deployment     | Github, Vercel                                              |
| Authentication | Auth.js, Google Auth, Magic Link                            |
| Others         | uploadthing, resend, zod                                    |
![next postgresql amazona](/public/assets/images/app.jpg)
## Resources
- Youtube Video : ???
- Demo Website :  https://next-pg-amazona-final.vercel.app/
- Source Code   :  https://github.com/basir/next-pg-amazona-final
- Full Course: ???
## What you will learn
- creating e-commerce website pages by next.js server components
- designing header, footer, sidebar, menu and search box by shadcn and tailwind
- quick view products in modals using nextjs parallel routes with intercepting routes
- create database models by drizzle orm and postgres database
- handling form inputs by react-hook-forms and zod data validator
- updating data by server actions without using any api
- managing shopping cart using http cookies on server side
- handling authentication and authorization by next-auth
- creating customer dashboard to update profile and track orders
- and implement a fully-functional admin dashboard with beautiful charts and handling products, orders and users
## Full Course
Get this course by 90% discount on Thinkific: ???
## Run Locally
1. Clone repo
   ```shell
    $ git clone git@github.com:basir/next-pg-shadcn-ecommerce.git
    $ cd next-pg-shadcn-ecommerce
   ```
2. Create .env.local File
   - duplicate .env.example and rename it to .env.local
3. Setup PostgreSQL
   - Vercel PostgreSQL MongoDB
     - Create database at https://vercel.com/docs/storage/vercel-postgres
     - In .env.local file update POSTGRES_URL to db url
   - OR Local PostgreSQL
     - Install it from https://www.postgresql.org/download
     - In .env.local file update MONGODB_URI to db url
4. Install and Run
   ```shell
     npm install
     npm run dev
   ```
5. Seed Data
   ```shell
     npx tsx ./db/seed
   ```
6. Admin Login
   - Open http://localhost:3000
   - Click Sign In button
   - Enter admin email "admin@example.com" and password "123456" and click Sign In


## Lessons
## Lessons


1. introduction
1. Introduction
2. install tools
2. Install tools
3. create next app with shadcn
3. Create next app
4. create website layout
5. list products
6. setup drizzle orm and postgres database
7. load products from database
8. deploy on vercel
9. create product details page
10. implement authentication
11. create new user
12. implement add to cart
13. create shopping cart page
14. get shipping address
15. select payment method
16. place order
17. create order details page
18. pay order by PayPal
19. pay order by Stripe
20. create orders history page
21. create user profile form
22. create admin layout
23. create dashboard page
24. list orders
25. mark orders to delivered
26. list products
27. edit products
28. list users
29. edit users
30. add home page carousel
31. add home page sidebar
32. create search page
‎app/(auth)/sign-up/page.tsx
+57
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,57 @@
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { APP_NAME } from '@/lib/constants'
import SignUpForm from './signup-form'
export const metadata: Metadata = {
  title: `Sign Up - ${APP_NAME}`,
}
export default async function SignUp({
  searchParams: { callbackUrl },
}: {
  searchParams: {
    callbackUrl: string
  }
}) {
  const session = await auth()
  if (session) {
    return redirect(callbackUrl || '/')
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image
              src="/assets/icons/logo.svg"
              width={100}
              height={100}
              alt={`${APP_NAME} logo`}
            />
          </Link>
          <CardTitle className="text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}
‎app/(auth)/sign-up/signup-form.tsx
+95
Original file line number	Original file line	Diff line number	Diff line change
@@ -0,0 +1,95 @@
'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUp } from '@/lib/actions/user.actions'
import { signUpDefaultValues } from '@/lib/constants'
export default function SignUpForm() {
  const [data, action] = useFormState(signUp, {
    success: false,
    message: '',
  })
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  const SignUpButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? 'Submitting...' : 'Sign Up'}
      </Button>
    )
  }
  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            type="text"
            defaultValue={signUpDefaultValues.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            type="email"
            defaultValue={signUpDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            defaultValue={signUpDefaultValues.password}
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            required
            type="password"
            defaultValue={signUpDefaultValues.confirmPassword}
          />
        </div>
        <div>
          <SignUpButton />
        </div>
        {!data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{' '}
          <Link
            target="_self"
            className="link"
            href={`/sign-in?callbackUrl=${callbackUrl}`}
          >
            Sign In
          </Link>
        </div>
      </div>
    </form>
  )
}