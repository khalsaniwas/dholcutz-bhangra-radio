import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Station from './components/content/Station.js'
import SongList from './components/content/SongList.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div className="App">
      <Container>
        <Row>

          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Station />
          </Col>
        </Row>

        <Row>
          <Col>
            <SongList />
          </Col>
          
        </Row>
      </Container>
        
      </div>
  );
}

export default App;
