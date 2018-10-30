import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import format from '../../../../helpers/date'
import { filterArray } from '../../../../helpers/util'
import Modal from '../../../../components/Modal/Modal'
import OrderForm from '../../OrderForm'

class OrderList extends PureComponent {
  static propTypes = {
    orders: PropTypes.shape({
      data: PropTypes.array,
    }),
  }

  state = {
    showModal: false,
    orderId: null,
    orders: this.tableData,
  }

  get tableData() {
    const { data } = this.props.orders
    const { statuses } = this.props

    return data.map(o => ({
      id: o.id,
      order_id: o.order_id,
      status_id: o.status,
      status:
        statuses.orders.length > 0 &&
        statuses.orders.filter(s => s.key === o.status)[0].labelAdmin,
      destination: o.destination,
      client_id: o.client.id,
      full_name: o.client.full_name,
      date_arrival: format(o.est_date_arriv),
      pay_status_id: o.pay_status,
      pay_status:
        statuses.payments.length > 0 &&
        statuses.payments.filter(s => s.key === o.pay_status)[0].labelAdmin,
    }))
  }

  /**
   * @description Close modal
   * @returns { Void }
   */
  handleOrderSelected = orderId => {
    this.setState({ showModal: !this.state.showModal, orderId })
  }

  /**
   * @description Filters the orders based on status
   * @returns { Void }
   */
  handleStatusChange = selected => {
    const data = this.tableData
    switch (selected) {
      case 'new':
        this.setState({ orders: data.filter(o => o.status_id === 'OS1') })
        break
      case 'process':
        this.setState({ orders: data.filter(o => o.status_id === 'OS2') })
        break
      case 'arrived':
        this.setState({ orders: data.filter(o => o.status_id === 'OS3') })
        break
      case 'invoiced':
        this.setState({ orders: data.filter(o => o.pay_status_id === 'PS1') })
        break
      default:
        this.setState({ orders: data })
    }
  }

  /**
   * @description Filters the orders based on the search text
   */
  handleSearch = term => {
    const data = this.tableData
    this.setState({ orders: filterArray(data, term) })
  }

  render() {
    return (
      <Fragment>
        <hr />
        <div className="row">
          <div className="col-md-2">
            <h4>Orders</h4>
          </div>
          <div className="col-md-10">
            <form>
              <div className="col-md-6">
                <input
                  className="mb0"
                  type="text"
                  placeholder="Search"
                  onChange={e => this.handleSearch(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <select>
                  <option selected="" value="Default">
                    Sort By
                  </option>
                  <option value="Small">Customer A-Z</option>
                  <option value="Medium">Customer Z-A</option>
                  <option value="Larger">Oldest-Newest</option>
                  <option value="Larger">Newest-Oldest</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" onClick={() => this.handleStatusChange('')}>
                  All Orders
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => this.handleStatusChange('new')}>
                  New Orders
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => this.handleStatusChange('process')}>
                  Orders In Transit
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => this.handleStatusChange('arrived')}>
                  Completed Orders
                </a>
              </li>
              <li className="nav-item">
                <a href="#" onClick={() => this.handleStatusChange('invoiced')}>
                  Pending Payment
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-10">
            <div className="table-responsive table-bordered">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ORDER #</th>
                    <th>Status</th>
                    <th>Destination</th>
                    <th>Cust #</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orders.map(o => (
                    <tr key={o.id}>
                      <td>
                        <a
                          href="#"
                          onClick={() => this.handleOrderSelected(o.id)}
                        >
                          {`[${o.id}] ${o.order_id ? o.order_id : ''}`}
                        </a>
                      </td>
                      <td>{o.status}</td>
                      <td>{o.destination}</td>
                      <td>{o.client_id}</td>
                      <td>{o.full_name}</td>
                      <td>{o.date_arrival}</td>
                      <td>{o.pay_status}</td>
                      <td />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          size="large"
          visible={this.state.showModal}
          onRequestToClose={() => this.handleOrderSelected(null)}
          closeKeys={['esc']}
        >
          <OrderForm id={this.state.orderId} />
        </Modal>
      </Fragment>
    )
  }
}

export default OrderList
