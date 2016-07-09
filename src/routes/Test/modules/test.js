import 'whatwg-fetch'

export const FETCH_DATA = 'FETCH_UFC_DATA'
export const RECEIVED_DATA = 'RECEIVED_UFC_DATA'

export const FetchData = () => ({
  type: FETCH_DATA
})

export const ReceivedData = (data) => ({
  type: RECEIVED_DATA,
  data
})

export const loadTestData = () => {
  return (dispatch) => {
    dispatch(FetchData())
    return fetch('http://www.reddit.com/r/ufc.json')
      .then(response => response.text())
      .then(json => dispatch(ReceivedData(json)))
  }
}

const initialState = { isLoading: false }

export default function testReducer (state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case RECEIVED_DATA: return { ...state, data: action.data, isLoading: false }
    case FETCH_DATA: return { ...state, isLoading: true }
    default: return state
  }
}



