import React from 'react'
import clsx from "clsx"

import styles from "./button.module.scss"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: "primary" | "neutral"
    className?: string
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {variant = "primary", className, children, ...rest} = props
  return (
    <button {...rest} className={clsx(styles.button, styles[variant], className)}>
        {children}
    </button>
  )
}
