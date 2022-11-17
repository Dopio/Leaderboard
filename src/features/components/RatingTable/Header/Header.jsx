import React, { useState } from "react";
import { ModalWindow } from "../../ModalWindow/ModalWindow";
import classes from './Header.module.css'
import { Menu } from "./Menu/Menu";


export const Header = () => {

  const [modalActive, setModalActive] = useState(false)



  return (
    <div className={classes.ratingTable__header}>
      <div className={classes.header_title}>
        Рейтинг по теме
        <Menu />
      </div>
      <div className={classes.header_button_wrapper}>
        <button
          className={classes.header_button}
          onClick={() => setModalActive(true)}
        >Войти как администратор</button>
        <ModalWindow modalActive={modalActive} setModalActive={setModalActive} />
      </div>
    </div>
  )
}