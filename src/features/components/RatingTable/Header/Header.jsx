import classes from './Header.module.css'
import { useDispatch } from 'react-redux'
import React, { useState } from "react";

import { ModalWindow } from "../../ModalWindow/ModalWindow.jsx";
import { Menu } from "./Menu/Menu.jsx";
import { fetchCompetitives } from '../../../../redux/slices/competitive.js';


export const Header = ({ admin, isAdmin }) => {
  const [modalActive, setModalActive] = useState(false)


  const dispath = useDispatch()

  React.useEffect(() => {
    dispath(fetchCompetitives())
  }, [])


  return (
    <div className={classes.ratingTable__header}>
      <div className={classes.header_title}>
        Рейтинг по теме
        <Menu admin={admin} isAdmin={isAdmin} />
      </div>
      <div className={classes.header_button_wrapper}>
        {admin ?
          <div className={classes.header_unLoggin_button}>
            <button
              className={classes.header_button}
              onClick={() => isAdmin(false)}
            >Разлогиниться</button>
          </div>
          :
          <>
            <button
              className={classes.header_button}
              onClick={() => setModalActive(true)}
            >Войти как администратор
            </button>
            <ModalWindow
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          </>}

      </div>
    </div>
  )
}