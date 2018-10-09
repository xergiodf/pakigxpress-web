import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import format from '../../helpers/date'
import statuses from '../../config/constants/statuses'
import Modal from '../../components/Modal/Modal'
import OrderForm from './OrderForm'

class OrderCard extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number,
    order_id: PropTypes.string,
    orig_track_number: PropTypes.string,
    destination: PropTypes.string,
    status: PropTypes.string,
    est_date_arriv: PropTypes.string,
    pay_status: PropTypes.string
  }

  state = {
    showModal: false
  }

  /**
   * @description Close modal
   * @returns { Void }
   */
  handleClose = () => {
    // const payload = { name: 'login' }
    // this.props.closeModal(payload)
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <Fragment>
        <div className='col-sm-12'>
          <div className='feature feature-1 boxed'>
            <div className='text-left left'>
              <button
                className='btn btn-lg btn-filled right'
                onClick={this.handleClose}
              >
                {
                  statuses.packageStatus.filter(
                    s => s.value === this.props.data.status
                  )[0].label
                }
              </button>
              <h4>
                <b>Order #:</b>
                {' '}
                {`[${this.props.data.id}] ${this.props.data.order_id ? this.props.order_id : ''}`}
                {' '}
                |
                {' '}
                <b>Orig Tracking #:</b>
                {' '}
                {this.props.data.orig_track_number}
              </h4>
              <ul className='list-inline'>
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
                    <b>Payment:</b>
                    {' '}
                    {
                      statuses.paymentStatus.filter(
                        s => s.value === this.props.data.pay_status
                      )[0].label
                    }
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal
          size='large'
          visible={this.state.showModal}
          onRequestToClose={this.handleClose}
          closeKeys={['esc']}
        >
          <OrderForm id={this.props.data.id} />
        </Modal>
      </Fragment>
    )
  }
}

export default OrderCard
