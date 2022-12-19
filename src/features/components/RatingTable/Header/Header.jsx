import classes from './Header.module.css'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

import { ModalWindow } from '../../ModalWindow/ModalWindow.jsx'
import { Menu } from './Menu/Menu.jsx'
import { logout, selectIsAuth } from '../../../../redux/slices/authSlice'

export const Header = ({ competitives }) => {
  const dispath = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  const [modalActive, setModalActive] = useState(false)
  const onClickLogout = () => {
    dispath(logout())
    window.localStorage.removeItem('token')
    setModalActive(false)
  }

  return (
    <div className={classes.ratingTable__header}>
      <div className={classes.header_title}>
        Рейтинг по теме

        <Menu competitives={competitives}/>

      </div>
      <div className={classes.header_button_wrapper}>
        {isAuth
          ? <div className={classes.header_unLoggin_button}>
            <button
              className={classes.header_button}
              onClick={(onClickLogout)}
            >Разлогиниться</button>
          </div>
          : <>
            <button
              className={classes.header_button}
              onClick={() => setModalActive(true)}
            >Войти как администратор
            </button>
            <ModalWindow
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          </>
          }

      </div>
    </div>
  )
}
