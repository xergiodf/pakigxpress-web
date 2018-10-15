import request from './request'

const getClients = payload =>
  request(
    { url: 'clients', method: 'GET', data: { ...payload } },
    { requestType: 'findClients' }
  )

const updateClient = payload =>
  request(
    { url: 'clients/me', method: 'PUT', data: { ...payload } },
    { requestType: 'updateClient' }
  )

export { getClients, updateClient }
