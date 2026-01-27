type ButtonProps = {
  variant?: 'filled' | 'outline'
  size: 's' | 'm' | 'l'
  onClick?: () => void
  className?: string
  textClassName?: string
  children: string
}

const Button = ({
  variant = 'filled',
  size,
  onClick,
  className,
  textClassName,
  children,
}: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center transition-all active:scale-[0.98] font-medium'

  const variants = {
    filled: 'bg-brand text-white hover:bg-branddark',
    outline: 'border border-border bg-transparent text-primary hover:bg-header',
  }

  const sizes = {
    s: 'px-4 py-2 h-[35px] min-w-[80px] text-b-16 rounded-[8px]',
    m: 'px-6 py-3 h-[66px] w-[187px] text-b-32 rounded-[14px]',
    l: 'h-[64px] py-4 text-b-24 rounded-[16px] w-full max-w-[411px]',
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className={textClassName}>{children}</span>
    </button>
  )
}

export default Button
