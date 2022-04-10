import React from 'react'

function CardBody({advice}) {
  return (
    <h2 className="card__body">
    { advice.advice === undefined
    ? "Please try refreshing the page."
    : `“${advice.advice}”` }
  </h2>
)
}

export default CardBody