import request from './request'

const getOrdersByUser = () =>
  request(
    {
      url: 'orders/me',
      method: 'GET'
    },
    {
      requestType: 'getOrdersByUser'
    }
  )

const postOrderByUser = payload =>
  request({
    url: 'orders/me',
    method: 'POST',
    data: {
      ...payload
    }
  })

export { getOrdersByUser, postOrderByUser }
