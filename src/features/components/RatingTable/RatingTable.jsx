import React from "react";
import { Header } from "./Header/Header";
import classes from './RatingTable.module.css'
import { Student } from "./Student/Student";

export const RatingTable = () => {
    return (
        <div className={classes.ratingTable__wrapper}>
            <Header />
            <Student />
            <Student />
            <Student />
        </div>
    )
}