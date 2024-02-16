export const SAVE_SONG = 'SAVE_SONG'

export const startFetchSongs = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch({
          type: 'START_FETCH_SONGS',
          payload: data,
          query: query,
        })
      } else {
        alert('Error fetching songs')
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const saveSong = (songData) => ({
  type: SAVE_SONG,
  payload: songData,
})
