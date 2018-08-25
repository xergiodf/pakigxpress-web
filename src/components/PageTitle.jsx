import React from 'react'

import cover from '../assets/img/cover.jpg'

const PageTitle = props => (
  <section className="page-title page-title-3 image-bg overlay parallax">
    <div
      className="background-image-holder fadeIn"
      style={{
        transform: 'translate3d(0px, 0px, 0px)',
        backgroundImage: `url(${cover})`,
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h3 className="uppercase mb0">{props.title}</h3>
        </div>
      </div>
    </div>
  </section>
)

export default PageTitle
