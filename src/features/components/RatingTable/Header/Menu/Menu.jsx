import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../../../../redux/slices/authSlice'

import classes from './Menu.module.css'
import { DeleteBtn } from './MenuButtons/DeleteBtn.jsx'
import { EditBtn } from './MenuButtons/EditBtn'


export const Menu = ({ competitives }) => {
  const isAuth = useSelector(selectIsAuth)

  /* const [firstCompetitiveTitle] = competitives.items */
  const [competition, setCompetition] = useState(/* firstCompetitiveTitle.competitiveTitle */'aa')

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
          {competitives.items.map((obj, index) =>
            <div
              key={obj._id}
              className={classes.menu__brand}
              onClick={() => { competitionHandler(obj.competitiveTitle) }}
            >
              <div className={classes.comtetition_wrapper}>
                <div className={classes.comtetition_title}>
                  {obj.competitiveTitle}
                </div>
                <div className={classes.comtetition_data}>
                  {obj.competitiveData}
                </div>
                {isAuth ?
                  <>
                    <div className={classes.edit_button}>
                      <EditBtn />
                    </div>
                    <div className={classes.delete_button}>
                      <DeleteBtn objId={obj._id} />
                    </div>
                  </> : <></>
                }

              </div>
            </div>
          )}
        </div>
      )}
    </div >
  )
}
