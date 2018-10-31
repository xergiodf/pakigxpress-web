import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavContainer from '../../NavContainer'
import FooterContainer from '../../FooterContainer'
import OrderList from './Orders/OrderList'
import ClientList from './Clients/ClientList'
import { authAdminOrdersRequest } from '../../../actions/order'
import { getClients } from '../../../actions/client'

class AdminDashboard extends PureComponent {
  static propTypes = {
    me: PropTypes.shape({
      data: PropTypes.shape({}),
    }),
    orders: PropTypes.shape({}),
    clients: PropTypes.shape({}),
    getOrders: PropTypes.func,
    getClients: PropTypes.func,
    statuses: PropTypes.shape({
      orders: PropTypes.array,
      payments: PropTypes.array,
    }),
  }

  state = {
    tableSelected: 'orders',
  }

  componentDidMount() {
    const { data } = this.props.me
    if (data.auth) {
      this.props.getOrders({})
      this.props.getClients({})
    }
  }

  /**
   * Handle orders/customers selection
   * @returns { Void }
   */
  handleTableSelected = selection => {
    this.setState({ tableSelected: selection })
  }

  renderSummary = () => {
    const { data } = this.props.orders
    const summary = {
      newOrders: data.filter(o => o.status === 'OS1').length,
      processingOrders: data.filter(o => o.status === 'OS2').length,
      arrivedOrders: data.filter(o => o.status === 'OS3').length,
      unpaidOrders: data.filter(o => o.pay_status === 'PS1').length,
    }
    return (
      <div className="col-md-10">
        <div className="col-sm-3 text-center">
          <div className="feature bordered mb30">
            <h1 className="large uppercase">{summary.newOrders}</h1>
            <h5 className="uppercase">New Orders</h5>
          </div>
        </div>
        <div className="col-sm-3 text-center">
          <div className="feature bordered mb30">
            <h1 className="large">{summary.processingOrders}</h1>
            <h5 className="uppercase">Processing Orders</h5>
          </div>
        </div>
        <div className="col-sm-3 text-center">
          <div className="feature bordered mb30">
            <h1 className="large">{summary.arrivedOrders}</h1>
            <h5 className="uppercase">Arrived Orders</h5>
          </div>
        </div>
        <div className="col-sm-3 text-center">
          <div className="feature bordered mb30">
            <h1 className="large">{summary.unpaidOrders}</h1>
            <h5 className="uppercase">Unpaid Orders</h5>
          </div>
        </div>
      </div>
    )
  }

  /**
   * Renders the correct component based on selection
   * @returns { Void }
   */
  renderContent = selected => {
    if (selected === 'orders') {
      if (this.props.orders.data.length > 0)
        return (
          <OrderList
            orders={this.props.orders}
            statuses={this.props.statuses}
          />
        )
    }
    if (this.props.clients.data.length > 0)
      return <ClientList clients={this.props.clients} />

    return ''
  }

  render() {
    return (
      <Fragment>
        <NavContainer me={this.props.me} />
        <div className="main-container">
          <section className="pb16 pt64">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <ul className="nav">
                    <li className="nav-item">
                      <a
                        href="#"
                        onClick={() => this.handleTableSelected('customers')}
                      >
                        View Customers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        onClick={() => this.handleTableSelected('orders')}
                      >
                        View Orders
                      </a>
                    </li>
                  </ul>
                </div>
                {this.renderSummary()}
              </div>
              {this.renderContent(this.state.tableSelected)}
            </div>
          </section>
          <FooterContainer />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({
  meReducer,
  orderReducer,
  clientReducer,
  statusReducer,
}) => ({
  me: meReducer,
  orders: orderReducer,
  clients: clientReducer,
  statuses: statusReducer,
})

const mapDispatchToProps = dispatch => ({
  getOrders: payload => dispatch(authAdminOrdersRequest(payload)),
  getClients: payload => dispatch(getClients(payload)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard)
