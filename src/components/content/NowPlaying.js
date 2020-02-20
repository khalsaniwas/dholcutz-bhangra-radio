import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiConfig from '../../apiConfig'

const NowPlaying = props => {
  const [nowPlaying, setNowPlaying] = useState(null)
  

  useEffect(() => {
    axios({ url: `${apiConfig.apiUrl}/nowplaying/1`,
      method: 'GET',
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
    </div>
  )
}

export default withRouter(NowPlaying);