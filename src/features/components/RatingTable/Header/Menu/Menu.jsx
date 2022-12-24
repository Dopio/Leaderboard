import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectIsAuth } from '../../../../../redux/slices/authSlice'

import classes from './Menu.module.css'
import { DeleteBtn } from './MenuButtons/DeleteBtn.jsx'
import { EditBtn } from './MenuButtons/EditBtn'

export const Menu = ({ competitives }) => {
  const isAuth = useSelector(selectIsAuth)
  const competitiveList = ['math', 'algebra']

  /* const [firstCompetitiveTitle] = competitives.items */
  const [competition, setCompetition] = useState(competitiveList[0])

  const [active, setActive] = useState(false)

  const competitionHandler = (selectedCompetition) => {
    setActive(false)
    setCompetition(selectedCompetition)
  }

  return (
    <div className={classes.menu}>
      <button
        className={classes.menu__btn}
        onClick={() => setActive(!active)}>
        {competition}
      </button>
      {active && (
        <div className={classes.menu__content}>
          {competitiveList.map((competitive) =>
            <div
              key={competitive}
              className={classes.menu__brand}
              onClick={() => { competitionHandler(competitive) }}
            >
              <div className={classes.comtetition_wrapper}>
                <div className={classes.comtetition_title}>
                  <Link to={`/${competitive}`}>{competitive}</Link>
                </div>
                {/* <div className={classes.comtetition_data}>
                  {competitive.competitiveData}
                </div> */}
                {isAuth
                  ? <>
                    <div className={classes.edit_button}>
                      <EditBtn />
                    </div>
                    <div className={classes.delete_button}>
                      <DeleteBtn competitiveId={competitive} />
                    </div>
                  </>
                  : <></>
                }

              </div>
            </div>
          )}
        </div>
      )}
    </div >
  )
}
