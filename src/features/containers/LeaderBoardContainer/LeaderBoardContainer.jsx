import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../../redux/slices/authSlice";
import { fetchCompetitives } from "../../../redux/slices/competitiveSlice";
import { AddCompetition } from "../../components/RatingTable/AddCompetition/AddCompetition";
import { RatingTable } from "../../components/RatingTable/RatingTable";

import classes from './LeaderBoardContainer.module.css'

export const LeaderBoardContainer = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispath = useDispatch()

    const { competitives } = useSelector((state) => state.competitives)

    React.useEffect(() => {
        dispath(fetchCompetitives())
    }, [])

    console.log(competitives.items)

    return (
        <div className={classes.body__wrappper}>
            <div className={classes.marginWrapper}>
                <RatingTable
                    competitives={competitives}
                />
            </div>
            {isAuth ? <AddCompetition /> : <></>}

        </div>
    )
}