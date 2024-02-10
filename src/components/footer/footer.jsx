import React from 'react'
import './footer.css'
const footer = () => {
  return (
  <section className='f-wrapper'>
    <div className="paddings innerwidth flexCenter f-container">
      {/* {left} */}
      <div className="flexColStart f-left">
        <img src="./logo2.png" alt="" width={120} />
        <span className='secondaryText'>
          Our vision is to mke all people <br />
          the best place to live for them.
        </span>
      </div>

      <div className="flexColStart f-right">
        <span className='primaryText'>Information</span>
        <span className='secondaryText'>248/1 ganesh nagar, Anuppampattu, Tiruvallur</span>
        <div className="flexCenter f-menu">
          <span>Property</span>
          <span>Serviices</span>
          <span>Product</span>
          <span>About Us</span>
        </div>
      </div>
    </div>

  </section>
  )
}

export default footer