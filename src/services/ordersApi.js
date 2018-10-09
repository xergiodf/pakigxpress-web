import request from './request'

const getOrdersByUser = () =>
  request(
    { url: 'orders/me', method: 'GET' },
    { requestType: 'getOrdersByUser' }
  )

const postOrderByUser = payload =>
  request(
    { url: 'orders/me', method: 'POST', data: { ...payload } },
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

export {
  getOrdersByUser,
  postOrderByUser,
  getOrdersByAdmin,
  updateOrderByUser,
  updateOrderByAdmin
}
