import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AdminDashboard from './Admin/AdminDashboard'
import UserDashboard from './User/UserDashboard'

const Dashboard = ({ me }) => {
  const { data } = me
  if (data.role === 'admin') {
    return <AdminDashboard />
  }
  return <UserDashboard />
}

Dashboard.propTypes = {
  me: PropTypes.shape({
    data: PropTypes.shape({}),
  }),
}

const mapStateToProps = ({ meReducer }) => ({
  me: meReducer,
})

export default connect(mapStateToProps)(Dashboard)
