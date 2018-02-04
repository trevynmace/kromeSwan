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
        this.days = 103
    }

    var d = new Date()
    this.daysToFrontfill = d.getDay()

    this.daysToBackfill = 7 - Math.floor((this.daysToFrontfill + this.days) % 7)
  }

  render () {
    return (
      <div>
        <div className="days-container">
          { this.getDays() }
          { Array.apply(null, Array(this.daysToFrontfill)).map(() => {
            return <DayCard/>
          }) }
          { Array.apply(null, Array(this.days)).map(() => {
            return <DayCard dayName={'blah'} dayDate={'1/1/18'}/>
          }) }
          { Array.apply(null, Array(this.daysToBackfill)).map(() => {
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