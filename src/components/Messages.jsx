import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const Messages = props => {
  const { messages } = props
  return (
    <Fragment>
      {messages.map(m => toast.info(`[${m.time}] ${m.body}`))}
    </Fragment>
  )
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      time: PropTypes.date,
    })
  ),
}

export default Messages
