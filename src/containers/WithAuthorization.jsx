import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const WithAuthorization = props => {
  const Component = props.component

  return (
    <Fragment>
      {!props.me.data.auth && <Redirect to="/login" />}
      <Component />
    </Fragment>
  )
}

WithAuthorization.propTypes = {
  me: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
  component: PropTypes.func,
}

const mapStateToProps = state => ({
  me: state.meReducer,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuthorization)
