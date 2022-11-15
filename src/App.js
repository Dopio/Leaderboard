import React from 'react'

import 'normalize.css/normalize.css'
import 'reset-css/reset.css'

import { Layout } from './Layout/Layout'
import { LeaderBoardContainer } from './features/containers/LeaderBoardContainer/LeaderBoardContainer'

export const App = () => {
  return (
    <Layout>
      <LeaderBoardContainer />
    </Layout>
  )
}
