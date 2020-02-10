import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const NowPlaying = props => {
  const [nowPlaying, setNowPlaying] = useState(null)
  

  useEffect(() => {
    axios({ url: `${apiUrl}/nowplaying/1`,
      method: 'GET',
      headers: {
        // Authorization: `Token token=${props.user.token}`
      }
    })
      .then(res => setNowPlaying(res.data.now_playing))
      .catch(console.error)
  }, [])

  if (!nowPlaying) {
    return <p>Loading stuff...</p>
  }

  return (
    <div className="jumbotron text-center">
      <h4>{nowPlaying.song.text}</h4>
      <Link to={`/properties`}>
        <button>Update</button>
      </Link>
      <Link to="/properties">
        <button type="text">Back</button>
      </Link>
    </div>
  )
}

export default withRouter(NowPlaying);