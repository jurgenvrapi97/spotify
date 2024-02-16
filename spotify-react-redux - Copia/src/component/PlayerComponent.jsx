import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const PlayerComponent = () => {
  const selectedSong = useSelector((state) => state.selectedSong.selectedSong)
  console.log(selectedSong)
  return (
    <div className="container-fluid position-absolute bottom-0 bg-dark w-100">
      <Row className="align-items-center py-2 justify-content-between">
        <Col xs={2} className="text-start text-white">
          <img src={selectedSong.coverImage} alt={selectedSong.title} />
          <p>{selectedSong.title}</p>
          <p></p>
        </Col>
        <Col xs={4}>
          <div className="d-flex justify-content-center">
            <button>Shuffle</button>
            <button>Rewind</button>
            <button>Play/Pause</button>
            <button>Fast Forward</button>
            <button>Repeat</button>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '25%' }}
            ></div>
          </div>
        </Col>
        <Col xs={3} className="text-center text-white">
          <p>Volume</p>
        </Col>
      </Row>
      <audio src=""></audio>
    </div>
  )
}

export default PlayerComponent
