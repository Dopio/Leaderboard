import React from 'react'
import clsx from 'clsx'
import classes from './DeleteBtn.module.css'

import { useDispatch } from 'react-redux'
import { fetchRemoveCompetitive } from '../../../../../../redux/slices/competitiveSlice.js'


export const DeleteBtn = ({objId}) => {
  const dispath = useDispatch()

  const onClickRemove = (id) => {
    dispath(fetchRemoveCompetitive(id))
  }

  return (
    <button
      className={clsx(classes.button, classes.touch, classes.delete)}
      /* onClick={onClickRemove(objId)} */
    />
  )
}
