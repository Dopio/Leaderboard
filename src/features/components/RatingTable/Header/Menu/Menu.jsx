import React, { useState } from 'react'

import classes from './Menu.module.css'


const competitionList = [
  "Параллепипед 13.05.2021",
  "Треугольник 3.09.207",
  "Квадрат 20.09.2022",
]

export const Menu = () => {

  const [competition, setCompetition] = useState(competitionList[0])

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
          {competitionList.map(competition =>
            <div
              key={competition}
              className={classes.menu__brand}
              onClick={() => { competitionHandler(competition) }}
            >
              {competition}
            </div>
          )}
        </div>
      )}
    </div >
  )
}
