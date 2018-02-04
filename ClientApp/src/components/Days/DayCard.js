import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import PropTypes from 'prop-types'

import './Styles.css'

export class DayCard extends Component {
    render() {
        return (
            <div className="day-card">
                {this.props.dayName}
                {this.props.dayDate}
            </div>
        )
    }
}

DayCard.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayDate: PropTypes.string.isRequired
}