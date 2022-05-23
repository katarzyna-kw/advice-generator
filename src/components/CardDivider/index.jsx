import React from 'react'
import dividerDesktop from '../../images/pattern-divider-desktop.svg'
import dividerMobile from '../../images/pattern-divider-mobile.svg'

function CardDivider() {
  return (
    <div className="divider">
    <picture>
      <source srcSet={dividerDesktop} media="(min-width: 768px)" />
      <img src={dividerMobile} alt="divider" />
    </picture>
  </div>
  )
}

export default CardDivider