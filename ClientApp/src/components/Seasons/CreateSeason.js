import React, { Component } from 'react'

export class CreateSeason extends Component {
    constructor() {
        super ()
        this.state = {
            name: '',
            description: '',
            startDate: '',
            numberOfDays: ''
        }
    }

    handleAddSeason = (evt) => {
        evt.preventDefault()
        console.log("im hungery")
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
