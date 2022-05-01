import React from 'react'
import dice from "../../images/icon-dice.svg"

function CardButton({getAdvice}) {
  return (
    <button className="dice" onClick={getAdvice} >
      <img src={dice} alt="icon" />
    </button>
  )
}

export default CardButton