import request from './request'

const getOrderStatusList = () =>
  request(
    { url: 'status/orders', method: 'GET' },
    { requestType: 'getOrderStatusList' }
  )

const getPaymentStatusList = () =>
  request(
    { url: 'status/payments', method: 'GET' },
    { requestType: 'getPaymentStatusList' }
  )

export { getOrderStatusList, getPaymentStatusList }
