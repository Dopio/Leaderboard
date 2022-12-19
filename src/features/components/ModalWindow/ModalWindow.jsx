import React from 'react'
import classes from './ModalWindow.module.css'

import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { fetcAuth } from '../../../redux/slices/authSlice'

export const ModalWindow = ({ modalActive, setModalActive }) => {
  const dispath = useDispatch()

  const {
    register,
    handleSubmit
    /* setError,
    formState: { errors, isValid } */
  } = useForm({
    defaultValues: {
      email: 'ksenia@test.ru',
      password: 'kek322'
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispath(fetcAuth(values))
    console.log(data)

    if (!data.payload) {
      return alert('Неудалось авторизоваться')
    }

    if ('token' in data.payload) { // Сохранение токена в localStorage
      window.localStorage.setItem('token', data.payload.token)
    }
  }

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
      <div className={classes.modaleWindow__content}>
        <div className={classes.modaleWindow__body}>
          <div className={classes.modaleWindow__title}>
            Авторизация
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.modaleWindow__login}>
              <div className={classes.login__title}>
                Логин
              </div>
              <div className={classes.login__input}>
                <input
                  type="email"
                  className={classes.login}
                  {...register('email', { required: 'Укажите почту' })}
                />
              </div>
            </div>
            <div className={classes.modaleWindow__password}>
              <div className={classes.password__title}>
                Пароль
              </div>
              <div className={classes.password__input}>
                <input
                  type="password"
                  className={classes.password}
                  {...register('password', { required: 'Укажите пароль' })}
                />
              </div>
            </div>
            <div className={classes.submit_button}>
              <button
                className={classes.submit}
                type="submit"
              >
                GO!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
