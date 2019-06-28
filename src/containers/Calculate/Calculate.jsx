import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'
import cover from '../../assets/img/home4.jpg'

const Calculate = ({ me }) => (
  <Fragment>
    <NavContainer me={me} />
    <div className="main-container">
      <section className="cover fullscreen image-bg overlay">
        <div
          className="background-image-holder fadeIn"
          style={{ background: `url(${cover})` }}
        >
          <img alt="Cover" className="background-image" src={cover} />
        </div>
        <div className="container v-align-transform">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">
              <div className="feature bordered text-center">
                <h3 className="uppercase">Calculate Your Package</h3>
                <p>Estimate Only</p>
                <form className="halves form-newsletter">
                  <input
                    className="mb16 validate-required validate-email signup-email-field"
                    type="text"
                    placeholder="Units"
                    name="Units"
                  />
                  <input
                    className="mb16 validate-required validate-email signup-email-field"
                    type="text"
                    placeholder="Size"
                    name="Size"
                  />
                  <input
                    className="mb16 validate-required validate-email signup-email-field"
                    type="text"
                    placeholder="Weight"
                    name="Wieght"
                  />
                  <input
                    className="mb16 validate-required validate-email signup-email-field"
                    type="text"
                    placeholder="Destination"
                    name="Destination"
                  />
                  <button
                    style={{ width: '100%' }}
                    className="mb16"
                    type="submit"
                  >
                    Calculate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterContainer />
    </div>
  </Fragment>
)

const mapStateToProps = ({ meReducer }) => ({
  me: meReducer,
})

export default connect(mapStateToProps)(Calculate)
