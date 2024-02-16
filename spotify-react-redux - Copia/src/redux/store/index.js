import { configureStore, combineReducers } from '@reduxjs/toolkit'

import songsReducer from '../reducers/song'

import { selectedSongReducer } from '../reducers/song-selected'

const mainReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})

const store = configureStore({ reducer: mainReducer })

export default store
