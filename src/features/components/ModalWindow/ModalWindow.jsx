import React from "react";
import classes from './ModaleWindow.module.css'

export const ModaleWindow = () => {
  return (
    <div className={classes.modaleWindow__wrapper}>
      <div className={classes.modaleWindow__exitButton}>
        <button className={classes.exitButton}>X</button>
      </div>
      <div className={classes.modaleWindow__body}>
        <div className={classes.modaleWindow__title}>
          Авторизация
        </div>
        <div className={classes.modaleWindow__login}>
          <div className={classes.login__title}>
            Логин
          </div>
          <div className={classes.login__input}>

          </div>
        </div>
        <div className={classes.modaleWindow__password}>
          <div className={classes.password__title}>
            Пароль
          </div>
          <div className={classes.password__input}>

          </div>
        </div>
        <div className={classes.submit_button}>
          Submit button
        </div>
      </div>
    </div>
  )
}