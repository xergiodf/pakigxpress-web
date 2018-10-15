import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { updateClient } from '../../actions/client'

const ClientForm = props => {
  const { client } = props

  if (props.visible && props.pristine) {
    const { initialize } = props
    initialize(client)
  }

  const { handleSubmit } = props

  const submit = values => {
    props.updateClient(values)
  }

  return (
    <Fragment>
      <div>
        <form className="form-email" onSubmit={handleSubmit(submit)}>
          <h6 className="uppercase text-center">Client #{client.id}</h6>
          <Field
            id="full_name"
            placeholder="Full Name"
            name="full_name"
            type="text"
            className="validate-required"
            component="input"
          />
          <Field
            id="phone"
            name="phone"
            placeholder="Phone Number"
            type="text"
            className="validate-required"
            component="input"
          />
          <Field
            id="address_1"
            name="address_1"
            placeholder="Address Line 1"
            type="text"
            className="validate-required"
            component="input"
          />
          <Field
            id="address_2"
            name="address_2"
            placeholder="Address Line 2"
            type="text"
            className="validate-required"
            component="input"
          />
          <Field
            id="city"
            name="city"
            placeholder="City"
            type="text"
            className="validate-required"
            component="input"
          />
          <Field
            id="state"
            name="state"
            placeholder="State"
            type="text"
            className="validate-required"
            component="input"
          />
          <Field
            id="zip"
            name="zip"
            placeholder="Zip Code"
            type="text"
            className="validate-required"
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
      </div>
    </Fragment>
  )
}

ClientForm.propTypes = {
  client: PropTypes.shape({}),
  updateClient: PropTypes.func,
}

const mapStateToProps = ({ meReducer }) => ({
  client: meReducer.data.client,
})

const mapDispatchToProps = dispatch => ({
  updateClient: payload => dispatch(updateClient(payload)),
})

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientForm)

const formed = reduxForm({
  form: 'formClient',
})(connected)

export default formed
