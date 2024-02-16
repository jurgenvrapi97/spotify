import { SAVE_SONG } from '../action'

const initialState = {
  selectedSong: {
    title: 'Nessuna canzone selezionata',
    coverImage: '',
  },
}

export const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SONG:
      return { ...state, selectedSong: action.payload }
    default:
      return state
  }
}
