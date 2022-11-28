import React from 'react'

import 'normalize.css/normalize.css'
import 'reset-css/reset.css'

import { Layout } from './Layout/Layout.jsx'
import { LeaderBoardContainer } from './features/containers/LeaderBoardContainer/LeaderBoardContainer.jsx'

export const App = () => {
  return (
    <Layout>
      <LeaderBoardContainer />
    </Layout>
  )
}
