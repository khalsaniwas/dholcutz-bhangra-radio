import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import './Request.css';


const Request = props => {
  const [requestMessage, setRequestMessage] = React.useState("");

  const requestSong = () => {
    axios({ url: `${apiConfig.apiUrl}/station/${apiConfig.stationId}/request/${props.requestId}`,
      method: 'POST',
    })
      .then(res => {
        setRequestMessage(res.data.message)
      }, res => {
        setRequestMessage("Request failed!")
      })
      .catch(console.error)
  }

  return (
    requestMessage === "" ?
      <Button
        className="request-button"
        variant="success"
        onClick={requestSong}
      >request</Button> :
      <span>{ requestMessage }</span>

  )
}

export default Request