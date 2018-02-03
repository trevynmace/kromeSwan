import React, { Component } from 'react'
import { CardGroup } from 'reactstrap'

export class DayList extends Component {
  constructor() {
    super()
  }

  render () {
    const days = [1, 2, 3, 4, 5]

    return (
      <div>
        <CardGroup>
          {days.map((day) => {
            return <div>{day}</div>
          })}
        </CardGroup>
      </div>
    )
  }
}