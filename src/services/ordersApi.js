import request from './request'

const getOrdersByUser = () =>
  request(
    { url: 'orders/me', method: 'GET' },
    { requestType: 'getOrdersByUser' }
  )

const postOrderByUser = payload =>
  request(
    { url: 'orders', method: 'POST', data: { ...payload } },
    { requestType: 'postOrderByUser' }
  )

const getOrdersByAdmin = () =>
  request({ url: 'orders', method: 'GET' }, { requestType: 'getOrdersByAdmin' })

const updateOrderByUser = payload =>
  request(
    { url: `orders/me/${payload.id}`, method: 'PUT', data: { ...payload } },
    { requestType: 'updateOrderByUser' }
  )

const updateOrderByAdmin = payload =>
  request(
    { url: `orders/${payload.id}`, method: 'PUT', data: { ...payload } },
    { requestType: 'updateOrderByAdmin' }
  )

const getOrderSummary = () =>
  request(
    { url: `orders/summary`, method: 'GET' },
    { requestType: 'getOrderSummary' }
  )

export {
  getOrdersByUser,
  postOrderByUser,
  getOrdersByAdmin,
  updateOrderByUser,
  updateOrderByAdmin,
  getOrderSummary,
}
