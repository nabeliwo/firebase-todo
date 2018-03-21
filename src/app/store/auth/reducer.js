import { INITIALIZE } from './actions'

const initialState = {
  initialized: false,
  authenticated: false,
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return { ...state, initialized: true }

    default:
      return state
  }
}
