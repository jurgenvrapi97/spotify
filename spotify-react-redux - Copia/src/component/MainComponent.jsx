import { Row } from 'react-bootstrap'
import RowSong from './RowSongs'

const MainComponent = () => {
  return (
    <>
      <Row className=" mt-5 mx-4">
        <h2 className=" ms-5 text-light">Rap Culture</h2>
        <RowSong query={'salmo'} />
      </Row>
      <Row className="mx-5 ms-5">
        <h2 className="  ms-5 text-light">Rock Culture</h2>
        <RowSong query={'acdc'} />
      </Row>
      <Row className="mx-5 ms-5">
        <h2 className="ms-5 text-light">Cantautori</h2>
        <RowSong query={'mannarino'} />
      </Row>
    </>
  )
}

export default MainComponent
