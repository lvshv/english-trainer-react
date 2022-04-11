import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'
interface IButtonProps {
  loading?: boolean

  disabled?: boolean

  active?: boolean

  loadingText?: string

  type?: 'button' | 'reset' | 'submit'

  leftIcon?: React.ReactElement

  rightIcon?: React.ReactElement

  color?: string

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  variant?: 'link' | 'solid' | 'outline' | 'light' | 'ghost'

  children?: React.ReactNode
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref): JSX.Element => {
  const {
    disabled: _disabled,
    loading,
    active,
    loadingText,
    type,
    leftIcon,
    rightIcon,
    children,
    className,
    color,
    variant = 'outline',
    size = 'md',
    ...rest
  } = props

  const disabled = _disabled || loading

  return (
    <button
      ref={ref}
      disabled={disabled}
      aria-disabled={disabled}
      type={type}
      data-active={active ? 'true' : undefined}
      data-color={color ? color : undefined}
      className={cn(styles.mybutton, className)}
      {...rest}
    >
      {leftIcon && !loading ? leftIcon : null}
      {/* {loading && (
          <Spinner
            className={cx(
              loadingText ? "relative" : "absolute",
              loadingText ? `mr-2` : "mr-0"
            )}
            size="sm"
          />
        )} */}
      {loading ? loadingText || <span className='opacity-0'>{children}</span> : children}
      {rightIcon && !loading ? rightIcon : null}
    </button>
  )
})
