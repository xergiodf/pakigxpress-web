import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import format from '../../../helpers/date'

class OrderCard extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      order_id: PropTypes.string,
      orig_track_number: PropTypes.string,
      destination: PropTypes.string,
      status: PropTypes.string,
      est_date_arriv: PropTypes.string,
      pay_status: PropTypes.string,
    }),
    id: PropTypes.number,
    handleModal: PropTypes.func,
    handleSelect: PropTypes.func,
    statuses: PropTypes.shape({
      orders: PropTypes.array,
      payments: PropTypes.array,
    }),
  }

  handleOrderSelection = () => {
    this.props.handleSelect(this.props.data.id)
    this.props.handleModal({ order: true })
  }

  render() {
    const { statuses } = this.props
    return (
      <Fragment>
        <div className="col-sm-12">
          <div className="feature feature-1 boxed">
            <div className="text-left left">
              <button
                className="btn btn-lg btn-filled right"
                onClick={() => this.handleOrderSelection()}
              >
                {
                  statuses.orders.filter(
                    s => s.key === this.props.data.status
                  )[0].labelUser
                }
              </button>
              <h4>
                <b>Order #:</b>{' '}
                {`[${this.props.data.id}] ${
                  this.props.data.order_id ? this.props.data.order_id : ''
                }`}{' '}
                | <b>Orig Tracking #:</b> {this.props.data.orig_track_number}
              </h4>
              <ul className="list-inline">
                <li>
                  <h5>
                    <b>Destination:</b> {this.props.data.destination}
                  </h5>
                </li>
                <li>
                  <h5>
                    <b>Est Arrival:</b> {format(this.props.data.est_date_arriv)}
                  </h5>
                </li>
                <li>
                  <h5>
                    <b>Pickup Location:</b> {this.props.data.destination}
                  </h5>
                </li>
                <li>
                  <h5>
                    <b>Payment:</b>{' '}
                    {
                      statuses.payments.filter(
                        s => s.key === this.props.data.pay_status
                      )[0].labelUser
                    }
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default OrderCard
