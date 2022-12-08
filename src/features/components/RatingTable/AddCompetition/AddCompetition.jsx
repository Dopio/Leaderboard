import React from "react";
import { useState } from "react";
import axios from '../../../../redux/axios.js'
import classes from '../../../containers/LeaderBoardContainer/LeaderBoardContainer.module.css'

export const AddCompetition = () => {

  const [competitiveTitle, setСompetitiveTitle] = useState('')
  const [competitiveData, setСompetitiveData] = useState('')


  const onSubmit = async () => {
    try {
      const fields = {
        competitiveTitle,
        competitiveData
      }
      await axios.post('/competitive', fields)
      setСompetitiveTitle('')
      setСompetitiveData('')
    } catch (error) {
      console.warn(error)
      alert('Ошибка при создании соревнования')

    }
  }

  return (
    <div className={classes.whiteBox}>
      <div className={classes.blackH1}>Добавить соревнование</div>
      <div className={classes.flexContainer}>

        <div className={classes.inputWrapper}>
          <div className={classes.inputName}>Название</div>
          <input
            className={classes.inputBlueBox}
            type="text"
            value={competitiveTitle}
            onChange={(e) => setСompetitiveTitle(e.target.value)}
          />
        </div>
        <div className={classes.inputWrapper2}>
          <div className={classes.inputName}>Дата</div>
          <input
            className={classes.blueBox}
            type="text"
            value={competitiveData}
            onChange={(e) => setСompetitiveData(e.target.value)}
          />
        </div>
      </div>

      {/*<button
        className={classes.blueBtn}
        onChange={() => { }}
        onClick={() => { }}
      >Добавить учеников</button> */}

      <button
        className={classes.orangeBtn}
        onClick={onSubmit}
      >Добавить соревнование</button>
    </div>
  )
}