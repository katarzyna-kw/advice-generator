import React from 'react'
import  dividerDesktop from "../../images/pattern-divider-desktop.svg"
import {dividerMobile} from "../../images/pattern-divider-mobile.svg"
import dice from "../../images/icon-dice.svg"

function Card() {
  return (
    <div className="card--container">
      <div className='card'>
      <header>
        <h1 className="card__header">Advice #</h1>
      </header>
      <h2 className="card__body">
        "Advice"
      </h2>
      <div className="divider">
        <img src={dividerDesktop} alt="divider" />
      </div>
      <div className="dice">
        <img src={dice} alt="icon" />
      </div>
      </div>
    </div>
  )
}

export default Card