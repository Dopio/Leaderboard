import React from "react";

import classes from '../../../containers/LeaderBoardContainer/LeaderBoardContainer.module.css'

export const AddCompetition = () => {

  return (
    <div className={classes.whiteBox}>
      <div className={classes.blackH1}>Добавить соревнование</div>
      <div className={classes.flexContainer}>

        <div className={classes.inputWrapper}>
          <div className={classes.inputName}>Название</div>
          <input className={classes.inputBlueBox} type="text" value={''} onChange={() => ''} />
        </div>
        <div className={classes.inputWrapper2}>
          <div className={classes.inputName}>Дата</div>
          <input className={classes.blueBox} type="date" value={''} onChange={() => ''} />
        </div>

      </div>
      <button className={classes.blueBtn} onChange={() => { }} onClick={() => { }}>Добавить учеников</button>
      <button className={classes.orangeBtn} onChange={() => { }} onClick={() => { }}>Добавить соревнование</button>
    </div>
  )
}