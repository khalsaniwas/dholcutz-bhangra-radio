import React from 'react'
import { withRouter } from 'react-router-dom'

import Player from './Player.js'
import './NowPlaying.css'

const NowPlaying = props => {
  

  if (!props.station) {
    return <p>Loading stuff...</p>
  }

  return (
    <div className="jumbotron text-center">
      <h4>Now Playing</h4>
      <Player />
      <h6>Listeners: { props.station.listeners.current }</h6>
      <h6>Next Song: { props.station.playing_next.song.text }</h6>
      
    </div>
  )
}

export default withRouter(NowPlaying);