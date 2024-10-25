import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import Menu from './menu'

const Header = async () => {
  return (
@@ -20,20 +21,7 @@ const Header = async () => {
            {APP_NAME}
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )