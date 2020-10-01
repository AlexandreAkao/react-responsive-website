import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
        <Route path='/' exact component='' />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
