import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Select from 'react-select'
import format from '../../helpers/date'
import statuses from '../../config/constants/statuses'
import { updateUserOrder, updateAdminOrder } from '../../actions/order'

const OrderForm = props => {
  const { data } = props.me

  const order = props.data.filter(o => o.id === props.id)[0]
  order.est_date_arriv = format(order.est_date_arriv)

  if (props.visible && props.pristine) {
    const { initialize } = props
    initialize(order)
  }

  const { handleSubmit } = props

  const submit = values => {
    if (data.auth) {
      if (data.role === 'admin') {
        props.updateAdminOrder(values)
      } else {
        props.updateUserOrder(values)
      }
    }
  }

  return (
    <Fragment>
      <div>
        <form className="form-email" onSubmit={handleSubmit(submit)}>
          <h6 className="uppercase text-center">Order #{order.id}</h6>
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
          <Field
            id="status"
            placeholder="Package status"
            name="status"
            component={Select}
            options={statuses.packageStatus}
            defaultValue={
              statuses.packageStatus.filter(s => s.value === order.status)[0]
            }
            isDisabled={data.auth && data.role !== 'admin'}
          />
          <Field
            id="pay_status"
            placeholder="Payment status"
            name="pay_status"
            component={Select}
            options={statuses.paymentStatus}
            defaultValue={
              statuses.paymentStatus.filter(
                s => s.value === order.pay_status
              )[0]
            }
            isDisabled={data.auth && data.role !== 'admin'}
          />
          <button
            style={{ width: '100%' }}
            className="btn btn-lg btn-filled"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  )
}

OrderForm.propTypes = {
  id: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  me: PropTypes.shape({}),
  visible: PropTypes.bool,
  updateUserOrder: PropTypes.func,
  updateAdminOrder: PropTypes.func,
}

const mapStateToProps = ({ orderReducer, meReducer }) => ({
  data: orderReducer.data,
  me: meReducer,
})

const mapDispatchToProps = dispatch => ({
  updateUserOrder: payload => dispatch(updateUserOrder(payload)),
  updateAdminOrder: payload => dispatch(updateAdminOrder(payload)),
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm)

const formed = reduxForm({
  form: 'formOrder',
})(connected)

export default formed
