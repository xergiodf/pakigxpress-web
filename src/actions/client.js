import { CLIENTS_REQUEST, CLIENT_EDIT_REQUEST } from '../actions/actionTypes'

const getClients = payload => ({
  type: CLIENTS_REQUEST,
  payload,
})

const updateClient = payload => ({
  type: CLIENT_EDIT_REQUEST,
  payload,
})

export { getClients, updateClient }
