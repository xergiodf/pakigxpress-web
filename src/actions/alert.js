import { ALERT_ERROR, ALERT_SUCCESS } from './actionTypes'

export const alertError = payload => ({
  type: ALERT_ERROR,
  payload,
})

export const alertSuccess = payload => ({
  type: ALERT_SUCCESS,
  payload,
})
