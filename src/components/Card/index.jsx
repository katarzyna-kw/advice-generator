import React, { useState, useEffect } from 'react'
import  dividerDesktop from "../../images/pattern-divider-desktop.svg"
import dividerMobile from "../../images/pattern-divider-mobile.svg"
import dice from "../../images/icon-dice.svg"

function Card() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);

  const updateDivider = () => {
    setIsMobile(window.innerWidth < 550);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDivider);
    return () => window.removeEventListener("resize", updateDivider);
  });

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