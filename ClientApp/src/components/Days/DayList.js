import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'
import PropTypes from 'prop-types'

import { DayCard } from './DayCard'
import './Styles.css'

export class DayList extends Component {
  constructor() {
    super()
  }

  getDays() {
    this.days = this.props.numberOfDays
    if (!this.days || this.days < 1){
        this.days = 3
    }

    var d = new Date()
    this.daysToBackfill = d.getDay()
  }

  render () {
    return (
      <div>
        <div className="days-container">
          { this.getDays() }
          { Array.apply(null, Array(this.daysToBackfill)).map(() => {
            return <DayCard/>
          }) }
          { Array.apply(null, Array(this.days)).map(() => {
            return <DayCard dayName={'blah'} dayDate={'1/1/18'}/>
          }) }
          { Array.apply(null, Array(this.daysToBackfill - 1)).map(() => {
            return <DayCard/>
          }) }
        </div>
      </div>
    )
  }
}

DayList.propTypes = {
  numberOfDays: PropTypes.number.isRequired
}