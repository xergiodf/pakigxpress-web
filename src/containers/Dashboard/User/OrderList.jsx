import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import OrderCard from './OrderCard'

class OrderList extends PureComponent {
  static propTypes = {
    orders: PropTypes.array,
  }

  state = {
    orders: [],
    first: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.orders.length > 0 &&
      prevState.orders.length < 1 &&
      !prevState.first
    ) {
      return {
        first: true,
        orders: nextProps.orders,
      }
    }
    return null
  }

  get tableData() {
    const data = this.props.orders
    return data.slice(0)
  }

  /**
   * @description Filters the orders based on status
   * @returns { Void }
   */
  handleStatusChange = selected => {
    const data = this.tableData
    switch (selected) {
      case 'new':
        this.setState({ orders: data.filter(o => o.status === 'OS1') })
        break
      case 'process':
        this.setState({ orders: data.filter(o => o.status === 'OS2') })
        break
      case 'arrived':
        this.setState({ orders: data.filter(o => o.status === 'OS3') })
        break
      case 'invoiced':
        this.setState({ orders: data.filter(o => o.pay_status === 'PS1') })
        break
      default:
        this.setState({ orders: data })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-2">
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
          <div className="col-sm-10">
            {this.state.orders.map(o => (
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
      </Fragment>
    )
  }
}

export default OrderList
