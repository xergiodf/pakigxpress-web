import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { submitUserOrder } from '../../actions/order'

class NewOrder extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    handleSubmit: PropTypes.func,
    submitUserOrder: PropTypes.func,
    newOrder: PropTypes.shape({}),
  }

  /**
   * Handles form submission with values
   */
  submit = values => {
    this.props.submitUserOrder({ client_id: this.props.id, ...values })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Fragment>
        <form className="form-email" onSubmit={handleSubmit(this.submit)}>
          <h6 className="uppercase text-center">New Order</h6>
          <Field
            id="orig_track_number"
            placeholder="Origin Tracking Number"
            name="orig_track_number"
            type="text"
            className="validate-required validate-email"
            component="input"
          />
          <Field
            id="destination"
            placeholder="Destination"
            name="destination"
            type="text"
            className="validate-required validate-email"
            component="input"
          />
          <Field
            id="pack_size"
            placeholder="Package Size"
            name="pack_size"
            type="text"
            className="validate-required validate-email"
            component="input"
          />
          <Field
            id="pack_weight"
            placeholder="Package Weight"
            name="pack_weight"
            type="text"
            className="validate-required validate-email"
            component="input"
          />
          <Field
            id="est_date_arriv"
            placeholder="Estimated Arrival Form Origin Shipper"
            name="est_date_arriv"
            type="date"
            className="validate-required validate-email"
            component="input"
          />
          <button
            style={{ width: '100%' }}
            className="btn btn-lg btn-filled"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  me: state.meReducer,
  orders: state.orderReducer,
})

const mapDispatchToProps = dispatch => ({
  submitUserOrder: payload => dispatch(submitUserOrder(payload)),
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewOrder)

const formed = reduxForm({
  form: 'newOrder',
})(connected)

export default formed
