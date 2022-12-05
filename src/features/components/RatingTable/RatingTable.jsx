import React from "react";
import classes from './RatingTable.module.css'

import { Header } from "./Header/Header";
import { Student } from "./Student/Student";

export const RatingTable = ({ admin, isAdmin }) => {
    return (
        <div className={classes.ratingTable__wrapper}>
            <Header admin={admin} isAdmin={isAdmin} />
            <Student />
            <Student />
            <Student />
        </div>
    )
}