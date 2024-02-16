import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { saveSong } from '../redux/action'

const SingleSong = ({ title, coverImage }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(saveSong({ title: title, coverImage: coverImage }))
  }

  return (
    <Col className="col-2 mx-5" onClick={handleClick}>
      <img src={coverImage} alt={title} width={'100%'} />{' '}
      <h6 className="text-wrap text-light text-center">{title}</h6>
    </Col>
  )
}

export default SingleSong
