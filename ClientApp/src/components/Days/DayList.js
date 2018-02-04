import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'

import { DayCard } from './DayCard'
import './Styles.css'

export class DayList extends Component {
  constructor() {
    super()
  }

  render () {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    return (
      <div>
        <div className="days-container">
          {days.map((day) => {
            return <DayCard/>
          })}
        </div>
      </div>
    )
  }
}