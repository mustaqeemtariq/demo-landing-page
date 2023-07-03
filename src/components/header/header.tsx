import React from 'react'
import clsx from "clsx"

import styles from "./header.module.scss"
import { Button } from 'components/button/button'

interface HeaderProps {
    title?: string
}

export const Header: React.FC<HeaderProps> = (props) => {
    const {title = "Office Timeline Online"} = props
  return (
    <header className={clsx(styles.header)}>
        <div>
            <h3>{title}</h3>
        </div>
        <div className={clsx(styles.button)}>
            <Button variant='neutral'>Create free account</Button>
            <Button>Login</Button>
        </div>

    </header>
  )
}
