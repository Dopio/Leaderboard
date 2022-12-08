import React from "react";
import { AddCompetition } from "../../components/RatingTable/AddCompetition/AddCompetition";

import { RatingTable } from "../../components/RatingTable/RatingTable";

import classes from './LeaderBoardContainer.module.css'

export const LeaderBoardContainer = () => {

    return (
        <div className={classes.body__wrappper}>
           <div className={classes.marginWrapper}>
            <RatingTable />
            </div>
            <AddCompetition/>
            
        </div>
    )
}