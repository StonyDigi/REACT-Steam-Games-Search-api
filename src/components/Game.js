import React from 'react'
import './Game.css'

const Game = ( {gameID, steamAppID, cheapest, cheapestDealID, external, internalName, thumb }) => {
  return (
    <div className='game'>
        <img src={thumb} alt={external} />
        <h3>{external}</h3>
        <p> <small>Játék azonosító: {gameID} | Steam azonosító: {steamAppID} </small> </p>
        <hr />
        <p> Legalacsonyabb ár: {cheapest}$ | Azonosító: {cheapestDealID} </p>
        <p> Név: {internalName} </p>
        <button>Megveszem</button>
    </div>
  )
}

export default Game