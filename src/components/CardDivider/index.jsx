import React from 'react'
import dividerDesktop from '../../images/pattern-divider-desktop.svg'
import dividerMobile from '../../images/pattern-divider-mobile.svg'

function CardDivider({isMobile}) {
  return (
    <div className="divider">
    {isMobile && <img src={dividerMobile} alt="divider" />}
    {!isMobile && <img src={dividerDesktop} alt="divider" />}
  </div>
)
}

export default CardDivider