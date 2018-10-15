import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavContainer from '../NavContainer'
import FooterContainer from '../FooterContainer'
import OrderCard from './OrderCard'
import ClientForm from './ClientForm'
import Modal from '../../components/Modal/Modal'
import {
  authUserOrdersRequest,
  authAdminOrdersRequest,
} from '../../actions/order'

class Dashboard extends Component {
  static propTypes = {
    me: PropTypes.shape({
      data: PropTypes.shape({}),
    }),
    orders: PropTypes.shape({}),
    authUserOrdersRequest: PropTypes.func,
    authAdminOrdersRequest: PropTypes.func,
  }

  state = {
    showModal: false,
  }

  componentDidMount() {
    const { data } = this.props.me
    if (data.auth) {
      if (data.role === 'admin') {
        this.props.authAdminOrdersRequest({})
      } else {
        this.props.authUserOrdersRequest({})
      }
    }
  }

  handleClose = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { client, email } = this.props.me.data
    const { data } = this.props.orders
    return (
      <Fragment>
        {/* <Fragment>
          {!this.props.me.data.auth && <Redirect to='/login' />}
        </Fragment> */}
        <NavContainer me={this.props.me} />
        <div className="main-container">
          <section className="page-title pb16 pt64">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="uppercase mb0">My Account</h3>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-secondary">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="feature feature-1 boxed">
                    <div className="text-left">
                      <h4 className="mb0">Account Info</h4>
                      <button onClick={this.handleClose}>Edit Info</button>
                      <ul className="mt32">
                        <li>{client.full_name}</li>
                        <li>{email}</li>
                        <li>{client.phone}</li>
                        <li>{client.address_1}</li>
                        <li>{client.address_2}</li>
                        <li>
                          {client.city} {client.state} {client.zip}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="feature feature-1 boxed"
                    style={{ minHeight: '300px' }}
                  >
                    <div className="text-center mt48">
                      <h4 className="mb32">Calculate an Order</h4>
                      <form
                        className="form-email"
                        data-success="Thanks for your submission, we will be in touch shortly."
                        data-error="Please fill all fields correctly."
                      >
                        <NavLink
                          to="/calculate"
                          style={{ width: '100%' }}
                          className="btn btn-lg btn-filled"
                        >
                          Calculate An Order
                        </NavLink>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div
                    className="feature feature-1 boxed"
                    style={{ minHeight: '300px' }}
                  >
                    <div className="text-center mt48">
                      <h4 className="mb32">Start an Order</h4>
                      <form
                        className="form-email"
                        data-success="Thanks for your submission, we will be in touch shortly."
                        data-error="Please fill all fields correctly."
                      >
                        <NavLink
                          to="/new"
                          style={{ width: '100%' }}
                          className="btn btn-lg btn-filled"
                        >
                          Start A New Order
                        </NavLink>
                      </form>
                    </div>
                  </div>
                </div>
                {data && data.map(o => <OrderCard key={o.id} data={o} />)}
              </div>
            </div>
          </section>
          <FooterContainer />
        </div>
        <Modal
          size="large"
          visible={this.state.showModal}
          onRequestToClose={this.handleClose}
          closeKeys={['esc']}
        >
          <ClientForm id={client.id} />
        </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  me: state.meReducer,
  orders: state.orderReducer,
})

const mapDispatchToProps = dispatch => ({
  authUserOrdersRequest: payload => dispatch(authUserOrdersRequest(payload)),
  authAdminOrdersRequest: payload => dispatch(authAdminOrdersRequest(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
