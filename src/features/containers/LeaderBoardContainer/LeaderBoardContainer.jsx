import React from "react";
import { Header } from "../../components/Header/Header";
import { RatingTable } from "../../components/RatingTable/RatingTable";
import classes from './LeaderBoardContainer.module.css'

export const LeaderBoardContainer = () => {
    <div className={classes.body__wrappper}>
        <Header />
        <RatingTable />
    </div>
}