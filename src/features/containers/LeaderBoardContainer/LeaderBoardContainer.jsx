import React from "react";
import { Header } from "../../components/Header/Header";
import { RatingTable } from "../../components/RatingTable/RatingTable";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import classes from './LeaderBoardContainer.module.css'

export const LeaderBoardContainer = () => {
    return <>
        <Header />
        <div className={classes.body__wrappper}>
            <Sidebar />
            <RatingTable />
        </div>
    </>
}