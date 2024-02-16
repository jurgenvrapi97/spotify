const initialState = {
  songs: {},
}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_SONGS':
      if (action.query) {
        return {
          ...state,
          songs: {
            ...state.songs,
            [action.query]: action.payload,
          },
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export default songsReducer
