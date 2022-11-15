import React from "react";
import classes from './Student.module.css'
import serGay from '../../../../img/sergay.jpg'

export const Student = () => {
  return (
    <div className={classes.student__wrapper}>
      <div className={classes.student__avatar}>
        <img src={serGay} alt="avatar" className={classes.avatar} />
      </div>
      <div className={classes.student__rating}>
        <div className={classes.student__name}>
          SerGAY AzovSky
        </div>
        <div className={classes.student__points}>
        <span className={classes.points}>99 </span> баллов
        </div>
      </div>
    </div>
  )
}