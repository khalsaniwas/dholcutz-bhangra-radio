import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import './Request.css';

const RequestMessage = ({requestMessage }) => {
  return (
  <div className={requestMessage.success ? "alert alert-dark" : "alert alert-dark"}>
    <strong>{ requestMessage.message }</strong>
    { requestMessage.reason ? <span className="reason"><br />{ requestMessage.reason }</span> : "" }
  </div> )
}

const Request = props => {
  const [requestMessage, setRequestMessage] = React.useState({});

  const requestSong = () => {
    axios({ url: `${apiConfig.apiUrl}/station/${apiConfig.stationId}/request/${props.requestId}`,
      method: 'POST',
    })
      .then(res => {
        setRequestMessage({
          success: true,
          message: "request submitted" + res.data.message,
          reason: "",
        })
      }, (err) => {
        setRequestMessage({
          success: false,
          message: "you can only submit one song",
          reason: err.response.data.message,
        })
      })
      .catch(console.error)
  }

  return (
    <div>
      {
        !requestMessage.message ?
        <Button
          className="request-button"
          variant="success"
          onClick={requestSong}
        >request</Button> : <RequestMessage requestMessage={requestMessage} />
      }
    </div>
  )
}

export default Request