import React from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiConfig from '../../apiConfig'


const Request = props => {
  // const [requestId, setRequestId] = React.useState("");

  const requestSong = () => {
    axios({ url: `${apiConfig.apiUrl}/station/${apiConfig.stationId}/request/${props.requestId}`,
      method: 'POST',
    })
      .then(res => {
        // setRequestId(res.data)
        console.log(res.data)
      })
      .catch(console.error)
  }

  return (
    <Button
      className="request-button"
      variant="success"
      onClick={requestSong}
    >request</Button>
  )
}

export default Request