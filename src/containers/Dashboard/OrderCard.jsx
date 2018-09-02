import React from 'react'
import PropTypes from 'prop-types'

const OrderCard = props => {
  return (
    <div className='col-sm-12'>
      <div className='feature feature-1 boxed'>
        <div className='text-left left'>
          <button className='btn btn-lg btn-filled right'>
            {props.status}
          </button>
          <h4>
            <b>Order #:</b>
            {' '}
            {`[${props.id}] ${props.order_id ? props.order_id : ''}`}
            {' '}
            |
            {' '}
            <b>Orig Tracking #:</b>
            {' '}
            {props.orig_track_number}
          </h4>
          <ul className='list-inline'>
            <li>
              <h5>
                <b>Destination:</b> {props.destination}
              </h5>
            </li>
            <li>
              <h5>
                <b>Est Arrival:</b> {props.est_date_arriv}
              </h5>
            </li>
            <li>
              <h5>
                <b>Pickup Location:</b> {props.destination}
              </h5>
            </li>
            <li>
              <h5>
                <b>Payment:</b> {props.pay_status}
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

OrderCard.propTypes = {
  id: PropTypes.number,
  order_id: PropTypes.string,
  orig_track_number: PropTypes.string,
  destination: PropTypes.string,
  status: PropTypes.string,
  est_date_arriv: PropTypes.string,
  pay_status: PropTypes.string
}

export default OrderCard
