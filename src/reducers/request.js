import { REQUEST_START, REQUEST_END } from '../actions/actionTypes'

export const initialState = {
  requesting: false,
  object: null
}

const requestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_START: {
      return {
        requesting: true,
        object: [action.payload]
      }
    }

    case REQUEST_END: {
      return {
        requesting: false,
        object: [action.payload]
      }
    }

    default: {
      return state
    }
  }
}

export default requestReducer
