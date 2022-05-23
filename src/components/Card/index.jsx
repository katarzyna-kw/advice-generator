import React, { useState, useEffect } from 'react'
import CardHeader from '../CardHeader'
import CardBody from '../CardBody'
import CardDivider from '../CardDivider'
import CardButton from '../CardButton'
import './Card.css'

function Card() {

  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    getAdvice()
  }, [])


  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((result) => {
      console.log("result: ", result.slip)
      setAdvice(result.slip)
    },
    (error) => {
      console.log("ERROR")
    })
  }


  return (
    <div className="card--container">
      <div className='card'>
        <CardHeader advice={advice} />
        <CardBody advice={advice} />
        <CardDivider />
        <CardButton getAdvice={getAdvice} />
      </div>
    </div>
  )
}

export default Card