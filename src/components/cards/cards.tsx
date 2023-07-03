import React from 'react'
import clsx from "clsx"

import styles from "./cards.module.scss"

interface CardProps {
    images?: string | string[]
    description: string
    className?: string
}

export const Card: React.FC<CardProps> = (props) => {
    const {images, description, className} = props
  return (
    <div className={clsx(styles.card, className)}>
        <div className={clsx(styles["image-container"])}>
            {typeof images === 'object' ? images.map(image => <img key={image} className={clsx(styles.image)} src={image} alt={description} />) :  <img src={images} className={clsx(styles.image)} alt={description} />}
        </div>
        <p>{description}</p>
    </div>
  )
}
