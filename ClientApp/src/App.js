import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { FetchData } from './components/FetchData'
import { Counter } from './components/Counter'
import { DayList } from './components/Days/DayList'
import { CreateSeason } from './components/Seasons/CreateSeason'
import { SeasonsList } from './components/Seasons/SeasonsList'

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/days' component={DayList} />
        <Route path='/createseason' component={CreateSeason} />
        <Route path='/seasonslist' component={SeasonsList} />
      </Layout>
    );
  }
}
