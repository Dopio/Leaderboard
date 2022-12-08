import React from "react";
import classes from '../../containers/LeaderBoardContainer/LeaderBoardContainer.module.css'

import { Header } from "./Header/Header";
import { Student } from "./Student/Student";

export const RatingTable = ({ competitives }) => {
    return (
        <div className={classes.whiteBox}>
            <div className={classes.ratingTable__wrapper}>
                <Header competitives={competitives} />
                <Student rating={89} />
                <Student rating={67} />
                <Student rating={16} />

            </div>
        </div>
    )
}