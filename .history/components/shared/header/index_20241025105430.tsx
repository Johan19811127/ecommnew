
import Image from 'next/image'
import Link from 'next/link'


import { APP_NAME } from '@/lib/constants'
import Menu from './menu'

const Header = async () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start ">
            <Image
              src="/assets/icons/Badge.png"
              width={40}
              height={48}
              className="me-2  -my-2"
              alt={`${APP_NAME} logo`}
            />
            {APP_NAME}
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header