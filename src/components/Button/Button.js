import React from 'react'
import classes from './Button.module.css'

export const Button = ({ children, type }) => {
  const cls = [
    classes.Button,
  ]

  type && cls.push(classes[type])

  return (
    <button className={cls.join(' ')}>
      {children}
    </button>
  )
}