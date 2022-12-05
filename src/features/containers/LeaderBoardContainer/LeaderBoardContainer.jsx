import React from "react";
import { useState } from "react";

import { RatingTable } from "../../components/RatingTable/RatingTable";

import classes from './LeaderBoardContainer.module.css'

export const LeaderBoardContainer = () => {

    const [admin, isAdmin] = useState(true)

    return (
        <div className={classes.body__wrappper}>
            <RatingTable admin={admin} isAdmin={isAdmin}/>
        </div>
    )
}