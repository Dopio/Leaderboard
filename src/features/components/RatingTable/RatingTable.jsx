import React from 'react'
import classes from './RatingTable.module.css'
import { DataGrid } from '@mui/x-data-grid'

export const RatingTable = () => {
  const columns = [
    {
      field: 'firstName',
      headerName: 'Ученик',
      width: 150,
      editable: true
    },
    {
      field: 'points',
      headerName: 'Баллы',
      type: 'number',
      width: 110,
      editable: true
    }
  ]
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', points: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', points: 42 }
  ]

  /*   const handleDeleteRow = (ids) => {

  } */

  return (
    <div className={classes.ratingTable__wrapper}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      /* onSelectionModelChange={(ids) => {
        handleDeleteRow(ids)
      }} */
      />
    </div>
  )
}
