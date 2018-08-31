import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

// import { store } from '../index'
import ENV from '../config/constants/env'

import axios from '../config/initializers/axios'
import { REQUEST_START, REQUEST_END, ALERT_ERROR } from '../actions/actionTypes'

const { BASE_URL, REQUEST_DELAY } = ENV.API

export default function * (options = {}, extraOptions = {}) {
  yield put({ type: REQUEST_START, payload: extraOptions.requestType })

  // const { me } = store.getState()
  const headers = options.headers || {}
  const requestOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    method: options.method || 'GET',
    params: options.params,
    baseURL: options.baseURL || BASE_URL,
    url: options.url,
    data: options.data
  }

  // Authorization Token
  // if (me.data) {
  //   requestOptions.headers.Authorization = `Bearer ${me.data.token}`
  // }

  const response = yield axios
    .request(requestOptions)
    .then(res => ({ response: res.data }))
    .catch(error => {
      if (error.response && error.response.data) {
        return {
          error: {
            title: 'API ERROR',
            code: error.response.status,
            description: error.response.data.message
              ? error.response.data.message
              : error.response.data
          }
        }
      }

      return {
        error: {
          title: 'API ERROR',
          code: 503,
          description: 'It was not possible to connect with the server. Try again in a moment.'
        }
      }
    })

  if (REQUEST_DELAY) yield delay(REQUEST_DELAY)
  yield put({ type: REQUEST_END, payload: extraOptions.requestType })

  if (response.error) {
    const payload = { ...response.error }
    yield put({ type: ALERT_ERROR, payload })
    return response
  }

  return response.response
}
