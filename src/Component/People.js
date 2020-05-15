import React, {Component} from 'react'

function People({card, arrLength}) {
    const movies = card.favoriteMovies.map(element => {
        return (
            <li> {element}</li>
        )
    })
    return (<div className='people-card'>
        <p className="people-number"><strong> {card.id} / {arrLength}</strong></p>
        <h1> {card.name.first} {card.name.last} </h1>
        <p><strong>From: </strong> {card.city} </p>
        <p><strong>Job Title: </strong> {card.title} </p>
        <p><strong>Employer: </strong> {card.employer} </p>
        <br/>
        <p><strong>Favorite Movies</strong></p>
        <ol>
            {movies}
        </ol>

    </div>)

}

export default People