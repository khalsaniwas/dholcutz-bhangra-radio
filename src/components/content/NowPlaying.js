import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import Player from './Player.js'
import './NowPlaying.css'

const NowPlaying = props => {
  const [nowPlaying, setNowPlaying] = useState(null)
  

  useEffect(() => {
    axios({ url: `${apiConfig.apiUrl}/nowplaying/${apiConfig.stationId}`,
      method: 'GET',
    })
      .then(res => {
        setNowPlaying(res.data)
        console.log(res.data)
      })
      .catch(console.error)
  }, [])

  if (!nowPlaying) {
    return <p>Loading stuff...</p>
  }

  return (
    <div className="jumbotron text-center">
      <Player />
      <h6>Listeners: { nowPlaying.listeners.current }</h6>
      <h6>Next Song: { nowPlaying.playing_next.song.text }</h6>
      
    </div>
  )
}

export default withRouter(NowPlaying);