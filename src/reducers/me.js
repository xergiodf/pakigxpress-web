import { AUTH_SUCCESS } from '../actions/actionTypes'

const initialState = {
  data: {
    auth: false,
    fullName: 'John Doe',
    email: 'john@doe.com'
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    default:
      return state
  }
}

export default reducer
