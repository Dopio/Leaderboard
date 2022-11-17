import React from "react";
import classes from './ModalWindow.module.css'

export const ModalWindow = ({ modalActive, setModalActive }) => {
  return (
    <div
      className={modalActive
        ? classes.modaleWindow__wrapper_active
        : classes.modaleWindow__wrapper}
    >
      <div className={classes.modaleWindow__exitButton}>
        <button
          className={classes.exitButton}
          onClick={() => setModalActive(false)}
        >❌</button>
      </div>
      <div
        className={classes.modaleWindow__content}
      >
        <div className={classes.modaleWindow__body}>
          <div className={classes.modaleWindow__title}>
            Авторизация
          </div>
          <div className={classes.modaleWindow__login}>
            <div className={classes.login__title}>
              Логин
            </div>
            <div className={classes.login__input}>
              <input
                type="text"
                className={classes.login}
              />
            </div>
          </div>
          <div className={classes.modaleWindow__password}>
            <div className={classes.password__title}>
              Пароль
            </div>
            <div className={classes.password__input}>
              <input
                type="text"
                className={classes.password}
              />
            </div>
          </div>
          <div className={classes.submit_button}>
            <button
              className={classes.submit}
            >GO!</button>
          </div>
        </div>
      </div>
    </div>
  )
}