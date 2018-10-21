import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavContainer from '../../NavContainer'
import FooterContainer from '../../FooterContainer'
import OrderCard from './OrderCard'
import ClientForm from '../ClientForm'
import Modal from '../../../components/Modal/Modal'
import OrderForm from '../OrderForm'
import { authUserOrdersRequest } from '../../../actions/order'

class Dashboard extends PureComponent {
  static propTypes = {
    me: PropTypes.shape({
      data: PropTypes.shape({}),
    }),
    orders: PropTypes.shape({}),
    statuses: PropTypes.shape({}),
    getOrders: PropTypes.func,
  }

  state = {
    showModal: {
      client: false,
      order: false,
    },
    orderId: 0,
  }

  componentDidMount() {
    const { data } = this.props.me
    if (data.auth) {
      this.props.getOrders({})
    }
  }

  /**
   * @description Close modal
   * @returns { Void }
   */
  handleModals = modal => {
    this.setState({
      showModal: {
        ...this.state.showModal,
        ...modal,
      },
    })
  }

  /**
   * @description Set current order id to the state
   * @returns { Void }
   */
  handleOrderSelection = id => {
    this.setState({ orderId: id })
  }

  render() {
    const { client, email } = this.props.me.data
    const { data } = this.props.orders
    return (
      <Fragment>
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
                      <button
                        onClick={() =>
                          this.handleModals({
                            client: !this.state.showModal.client,
                          })
                        }
                      >
                        Edit Info
                      </button>
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
                {data &&
                  data.map(o => (
                    <OrderCard
                      key={o.id}
                      data={o}
                      handleModal={this.handleModals}
                      handleSelect={this.handleOrderSelection}
                      statuses={this.props.statuses}
                    />
                  ))}
              </div>
            </div>
          </section>
          <FooterContainer />
        </div>
        <Modal
          size="large"
          visible={this.state.showModal.client}
          onRequestToClose={() =>
            this.handleModals({ client: !this.state.showModal.client })
          }
          closeKeys={['esc']}
        >
          <ClientForm id={client.id} />
        </Modal>
        <Modal
          size="large"
          visible={this.state.showModal.order}
          onRequestToClose={() =>
            this.handleModals({ order: !this.state.showModal.order })
          }
          closeKeys={['esc']}
        >
          <OrderForm id={this.state.orderId} />
        </Modal>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ meReducer, orderReducer, statusReducer }) => ({
  me: meReducer,
  orders: orderReducer,
  statuses: statusReducer,
})

const mapDispatchToProps = dispatch => ({
  getOrders: payload => dispatch(authUserOrdersRequest(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
