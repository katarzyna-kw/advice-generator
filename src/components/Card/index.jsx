import React, { useState, useEffect } from 'react'
import CardHeader from '../CardHeader'
import CardBody from '../CardBody'
import CardDivider from '../CardDivider'
import CardButton from '../CardButton'
import './Card.css'

function Card() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
  const [advice, setAdvice] = useState([]);

  const updateDivider = () => {
    setIsMobile(window.innerWidth < 550);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDivider);
    return () => window.removeEventListener("resize", updateDivider);
  });

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
        <CardDivider isMobile={isMobile} />
        <CardButton getAdvice={getAdvice} />
      </div>
    </div>
  )
}

export default Card