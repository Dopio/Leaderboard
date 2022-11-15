import React from "react";

import { RatingTable } from "../../components/RatingTable/RatingTable";

import classes from './LeaderBoardContainer.module.css'

export const LeaderBoardContainer = () => {
    return (
        <div className={classes.body__wrappper}>
            <RatingTable />
        </div>
    )
}