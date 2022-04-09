import React from 'react'

function CardHeader({advice}) {
  return (
    <header>
    <h1 className="card__header">
      {advice.advice == undefined
        ? "Unable to load" 
        : `Advice #${advice.id}`}
    </h1>
  </header>
)
}

export default CardHeader