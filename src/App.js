import React from 'react'

import 'normalize.css/normalize.css'
import 'reset-css/reset.css'

import { Layout } from './Layout/Layout.jsx'
import { LeaderBoardContainer } from './features/containers/LeaderBoardContainer/LeaderBoardContainer.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetcAuthMe, selectIsAuth } from './redux/slices/authSlice.js'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  const dispath = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispath(fetcAuthMe(isAuth))
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LeaderBoardContainer />}/>
      </Routes>
    </Layout>
  )
}
