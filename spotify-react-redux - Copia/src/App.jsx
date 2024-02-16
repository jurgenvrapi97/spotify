import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Sidebar from './component/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import TopMenu from './component/TopMenu'
import MainComponent from './component/MainComponent'
import PlayerComponent from './component/PlayerComponent'

function App() {
  return (
    <>
      <Container className="container-fluid m-0 ps-0">
        <Row>
          <Sidebar />
          <Col className=" ps-0 position-relative">
            <div className="main-component">
              <TopMenu />
              <MainComponent />
            </div>
            <PlayerComponent />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
