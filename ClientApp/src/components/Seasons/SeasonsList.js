import React, { Component } from 'react'
import axios from 'axios'

export class SeasonsList extends Component{
    constructor(){
        super ()
        this.state = {
            seasons: []
        }

        this.handleGetSeasons = this.handleGetSeasons.bind(this);
    }

    handleGetSeasons = () => {
        axios.get('/api/data/getseasons')
            .then(function (response) {
                this.state.seasons = response.data
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    render () {
        this.handleGetSeasons()

        return (
            <div>
                List of seasons
            </div>
        )
    }
}
