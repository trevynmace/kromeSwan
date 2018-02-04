import React, { Component } from 'react'
import axios from 'axios'

export class CreateSeason extends Component {
    constructor() {
        super ()
        this.state = {
            name: '',
            description: '',
            startDate: '',
            numberOfDays: 0
        }

        this.handleAddSeason = this.handleAddSeason.bind(this);
    }

    handleAddSeason = (evt) => {
        evt.preventDefault()

        axios.post('/api/data/createSeason', {
            name: this.state.name,
            description: this.state.description,
            startDate: this.state.startDate,
            numberOfDays: this.state.numberOfDays
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render (){
        return (
            <div>
                <form onSubmit={this.handleAddSeason}>
                    <input name="name" type="text" onChange={(evt) => this.setState({ name: evt.target.value })}></input>
                    <input name="description" type="textarea" onChange={(evt) => this.setState({ description: evt.target.value })}></input>
                    <input name="numberOfDays" type="number" onChange={(evt) => this.setState({ numberOfDays: evt.target.value })}></input>
                    <input name="startDate" type="date" onChange={(evt) => this.setState({ startDate: evt.target.value })}></input>
                    <button type="submit">Create Season!</button>
                </form>
            </div>
        )
    }
}
