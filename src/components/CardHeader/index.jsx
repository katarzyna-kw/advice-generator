import React from 'react'

function CardHeader({advice, isLoaded}) {
  return (
    <header>
    <h1 className="card__header">
      {!isLoaded 
        ? "Unable to load" 
        : `Advice #${advice.id}`}
    </h1>
  </header>
)
}

export default CardHeader