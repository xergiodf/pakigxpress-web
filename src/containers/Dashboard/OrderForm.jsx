import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import format from '../../helpers/date'
import { updateUserOrder, updateAdminOrder } from '../../actions/order'
import destinations from '../../helpers/order-destinations'

class OrderForm extends PureComponent {
  state = {
    id: null,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.id !== state.id) {
      const order = props.data.filter(o => o.id === props.id)[0]

      if (!order) return null
      order.est_date_arriv = format(order.est_date_arriv)

      if (props.visible && props.pristine) {
        const { initialize } = props
        initialize(order)
      }
      return { id: props.id }
    }

    // Return null to indicate no change to state.
    return null
  }

  render() {
    const { statuses, handleSubmit } = this.props
    const order = this.props.data.filter(o => o.id === this.state.id)[0]
    if (!order) return 'No order selected'

    const { data } = this.props.me
    const submit = values => {
      if (data.auth) {
        if (data.role === 'admin') {
          this.props.updateAdminOrder(values)
        } else {
          this.props.updateUserOrder(values)
        }
      }
    }

    const orderStatus = statuses.orders.map(s => ({
      value: s.key,
      label: s.value,
    }))

    const paymentStatus = statuses.payments.map(s => ({
      value: s.key,
      label: s.value,
    }))

    return (
      <Fragment>
        <div>
          <form className="form-email" onSubmit={handleSubmit(submit)}>
            <h6 className="uppercase text-center">Order #{order.id}</h6>
            <label htmlFor="destination">Destination</label>
            <Field
              id="destination"
              placeholder="Destination"
              name="destination"
              component="select"
              disabled={data.auth && data.role !== 'admin'}
            >
              <option disabled value="">
                Destination
              </option>
              {destinations.map((d, i) => (
                <option key={`${d - i}`} value={d}>
                  {d}
                </option>
              ))}
            </Field>
            <label htmlFor="pack_size">Package Size</label>
            <Field
              id="pack_size"
              placeholder="Package Size"
              name="pack_size"
              type="text"
              className="validate-required validate-email"
              component="input"
              disabled={data.auth && data.role !== 'admin'}
            />
            <label htmlFor="pack_weight">Package Weight</label>
            <Field
              id="pack_weight"
              placeholder="Package Weight"
              name="pack_weight"
              type="text"
              className="validate-required validate-email"
              component="input"
              disabled={data.auth && data.role !== 'admin'}
            />
            <label htmlFor="est_date_arriv">
              Estimated Arrival Form Origin Shipper
            </label>
            <Field
              id="est_date_arriv"
              placeholder="Estimated Arrival Form Origin Shipper"
              name="est_date_arriv"
              type="date"
              className="validate-required validate-email"
              component="input"
              disabled={data.auth && data.role !== 'admin'}
            />
            <label htmlFor="status">Package status</label>
            <Field
              id="status"
              placeholder="Package status"
              name="status"
              component="select"
              disabled={data.auth && data.role !== 'admin'}
            >
              <option />
              {orderStatus.map(o => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </Field>
            <label htmlFor="pay_status">Payment status</label>
            <Field
              id="pay_status"
              placeholder="Payment status"
              name="pay_status"
              component="select"
              disabled={data.auth && data.role !== 'admin'}
            >
              <option />
              {paymentStatus.map(p => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </Field>
            {data.auth && data.role === 'admin' && (
              <button
                style={{ width: '100%' }}
                className="btn btn-lg btn-filled"
                type="submit"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </Fragment>
    )
  }
}

OrderForm.propTypes = {
  id: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  me: PropTypes.shape({}),
  visible: PropTypes.bool,
  updateUserOrder: PropTypes.func,
  updateAdminOrder: PropTypes.func,
  statuses: PropTypes.shape({
    orders: PropTypes.array,
    payments: PropTypes.array,
  }),
}

const mapStateToProps = ({ orderReducer, meReducer, statusReducer }) => ({
  data: orderReducer.data,
  me: meReducer,
  statuses: statusReducer,
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
