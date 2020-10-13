import React, { useState } from 'react'
import './SongHistory.css';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SongHistory = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(isOpen ? false :true)
  }

  if (!props.history) {
    return <p>Loading stuff...</p>
  }

  return (
    <Row>
      <Col>
        <Button
          className="show-history"
          variant="dark"
          onClick={handleClick}
          >{ isOpen ? "➕" : "➖" } Song History</Button>
        <ol className={ isOpen ? "show" : "hide" }>
          {props.history.map(song => 
              <li key={song.sh_id}>{song.song.text}
              </li>
          )} 
        </ol>
      </Col>
    </Row>
  )

}

export default SongHistory