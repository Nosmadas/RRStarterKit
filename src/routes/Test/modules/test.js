import 'whatwg-fetch'

export const FETCH_DATA = 'FETCH_DATA'
export const RECEIVED_DATA = 'RECEIVED_DATA'

export const FetchData = () => ({
  type: FETCH_DATA
})

export const ReceivedData = (data) => ({
  type: RECEIVED_DATA,
  data
})

export const LoadTestData = () => {
  return (dispatch) => {
    dispatch(FetchData())
    return fetch('http://www.reddit.com/r/ufc.json')
      .then(response => response.json())
      .then(json => dispatch(ReceivedData(json)))
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVED_DATA: return { ...state, data: action.data, loading: false }
    case FETCH_DATA: return { ...state, loading: true }
    default: return state
  }
}



