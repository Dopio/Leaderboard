import React from 'react'
import classes from './Student.module.css'
import serGay from '../../../../img/sergay.jpg'

export const Student = ({ rating }) => {
  return (
    <div className={classes.student__wrapper}>
      <div className={classes.student__avatar}>
        <img src={serGay} alt="avatar" className={classes.avatar} />
      </div>
      <div className={classes.student__rating} style={{ width: rating + '%' }}>
        <div className={classes.student__name}>
          SerGAY AzovSky
        </div>
        <div className={classes.student__points}>
          <span className={classes.points}>{rating} </span> баллов
        </div>
      </div>
    </div>
  )
}
