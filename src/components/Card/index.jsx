import React, { useState, useEffect } from 'react'
import  dividerDesktop from "../../images/pattern-divider-desktop.svg"
import dividerMobile from "../../images/pattern-divider-mobile.svg"
import dice from "../../images/icon-dice.svg"
import './Card.css'

function Card() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
  const [advice, setAdvice] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const updateDivider = () => {
    setIsMobile(window.innerWidth < 550);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDivider);
    return () => window.removeEventListener("resize", updateDivider);
  });

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((result) => {
      console.log("result: ", result.slip)
      setIsLoaded(true);
      setAdvice(result.slip)
    },
    (error) => {
      console.log("ERROR")
      }
    )
  }, [])

  return (
    <div className="card--container">
      <div className='card'>
      <header>
        <h1 className="card__header">
          Advice #{advice.id}
        </h1>
      </header>
      <h2 className="card__body">
      “{advice.advice}”
      </h2>
      <div className="divider">
        {isMobile && <img src={dividerMobile} alt="divider" />}
        {!isMobile && <img src={dividerDesktop} alt="divider" />}
      </div>
      <button className="dice">
        <img src={dice} alt="icon" />
      </button>
      </div>
    </div>
  )
}

export default Card