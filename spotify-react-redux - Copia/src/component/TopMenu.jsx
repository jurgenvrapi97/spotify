import { Col, Row } from 'react-bootstrap'

const TopMenu = () => {
  return (
    <Row className="justify-content-center">
      <Col className="col-10 mt-3 d-flex  justify-content-around">
        <a className="text-secondary no-underline fw-bold " href="">
          TREDING
        </a>
        <a className="text-secondary no-underline fw-bold " href="">
          PODCAST
        </a>
        <a className="text-secondary no-underline fw-bold " href="">
          MOODS AND GENRES
        </a>
        <a className="text-secondary no-underline fw-bold " href="">
          NEW RELEASE
        </a>
        <a className="text-secondary no-underline fw-bold " href="">
          DISCOVER
        </a>
      </Col>
    </Row>
  )
}

export default TopMenu
