import { cn } from '@/lib/utils'
const ProductPrice = ({
  value,
  className,
}: {
  value: number
  className?: string
}) => {
  const stringValue = value.toString()
  const [intValue, floatValue] = stringValue.includes('.')
    ? stringValue.split('.')
    : [stringValue, '']
  return (
    <p className={cn('text-2xl font', className)}>
      <span className="text-xs align-super">R </span>
      {intValue}
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  )
}
export default ProductPrice