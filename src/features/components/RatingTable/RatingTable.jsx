import React from "react";
import classes from './RatingTable.module.css'

export const RatingTable = () => {
    return (
        <div className={classes.ratingTable__wrapper}>
            <div className={classes.ratingTable__header}>
                <div className={classes.header_title}>
                    Рейтинг по теме
                    <span className={classes.competition_menu}> Параллепипед </span>
                    20.09.2022
                </div>
                <div className={classes.header_button}>
                    <button>Войти как администратор</button>
                </div>
            </div>
        </div>
    )
}