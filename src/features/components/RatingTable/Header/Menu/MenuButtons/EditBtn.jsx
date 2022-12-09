import React from 'react'
import clsx from 'clsx'
import classes from './EditBtn.module.css'

/* Редактирование Todo */
export const EditBtn = ({
  editTaskHandler,
  itemId,
  title,
  handleSetActiveTodo,
  description
}) => {
  return (
    <button
      className={clsx(classes.button, classes.touch, classes.edit)}
      onClick={() => editTaskHandler(itemId, title, description) & handleSetActiveTodo(itemId)}
    />
  )
}
