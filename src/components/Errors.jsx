import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const Errors = props => {
  const { errors } = props
  return (
    <Fragment>{errors.map(m => toast.error(`[${m.time}] ${m.body}`))}</Fragment>
  )
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      time: PropTypes.date,
    })
  ),
}

export default Errors
