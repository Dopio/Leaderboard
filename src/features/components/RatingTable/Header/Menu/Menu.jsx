import React, { useState } from 'react'

import classes from './Menu.module.css'


/* const competitionList = [
  "Параллепипед 13.05.2021",
  "Треугольник 3.09.207",
  "Квадрат 20.09.2022",
] */

export const Menu = ({ competitives }) => {
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
              {obj.competitiveTitle}
            </div>
          )}
        </div>
      )}
    </div >
  )
}
