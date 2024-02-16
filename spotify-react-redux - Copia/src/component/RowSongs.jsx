import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startFetchSongs } from '../redux/action'
import SingleSong from './SingleSong' // Assumi che 'SingleSong' sia il componente che stai cercando di utilizzare
import { Col } from 'react-bootstrap'

const RowSong = ({ query }) => {
  const dispatch = useDispatch()

  const songs = useSelector((state) => {
    return state.songs.songs[query]
  })

  useEffect(() => {
    dispatch(startFetchSongs(query))
  }, [dispatch, query])

  const firstFourSongs = songs
    ? songs
        .slice(0, 4)
        .map((song) => (
          <SingleSong
            key={song.id}
            title={song.title}
            coverImage={song.album.cover}
          />
        ))
    : null

  return (
    <Col className="d-flex justify-content-center my-5">{firstFourSongs}</Col>
  )
}

export default RowSong
