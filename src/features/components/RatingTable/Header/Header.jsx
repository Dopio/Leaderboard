import React from "react";
import classes from './Header.module.css'

export const Header = () => {
  return (
    <div className={classes.ratingTable__header}>
      <div className={classes.header_title}>
        Рейтинг по теме
        <span className={classes.competition_menu}> Параллепипед </span>
        20.09.2022
      </div>
      <div className={classes.header_button_wrapper}>
        <button className={classes.header_button}>Войти как администратор</button>
      </div>
    </div>
  )
}