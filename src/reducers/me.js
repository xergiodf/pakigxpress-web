import { AUTH_SUCCESS, LOGOUT_REQUEST } from '../actions/actionTypes'

const initialState = {
  data: {
    auth: false,
    full_name: 'J',
    email: '',
    client: {
      full_name: '',
      phone: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      zip: ''
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        data: action.payload
      }

    case LOGOUT_REQUEST:
      return initialState

    default:
      return state
  }
}

export default reducer
