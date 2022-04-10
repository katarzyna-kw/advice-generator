import React, { useState, useEffect } from 'react'
import CardHeader from '../CardHeader'
import CardBody from '../CardBody'
import  dividerDesktop from "../../images/pattern-divider-desktop.svg"
import dividerMobile from "../../images/pattern-divider-mobile.svg"
import dice from "../../images/icon-dice.svg"
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
        <div className="divider">
          {isMobile && <img src={dividerMobile} alt="divider" />}
          {!isMobile && <img src={dividerDesktop} alt="divider" />}
        </div>
        <button className="dice" onClick={getAdvice} >
          <img src={dice} alt="icon" />
        </button>
      </div>
    </div>
  )
}

export default Card