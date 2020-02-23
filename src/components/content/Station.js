import React, { useEffect, useState } from 'react'
import NowPlaying from './NowPlaying.js'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import SongHistory from './SongHistory'

const Station = props => {
  const [station, setStation] = useState(null)

  const [trigger, setTrigger] = useState(0)
  

  useEffect(() => {
    axios({ url: `${apiConfig.apiUrl}/nowplaying/${apiConfig.stationId}`,
      method: 'GET',
    })
      .then(res => {
        setStation(res.data)

        setTimeout( () => {
          setTrigger(trigger+1)
        }, res.data.now_playing.remaining*1000)
        
        console.log(res.data)
      })
      .catch(console.error)
  }, [trigger])

  if(!station) {
    return <p>Loading station...</p>
    
  }
  return (
    <div>
      <NowPlaying 
        station={station} />
      <SongHistory 
        history={station.song_history} />
    </div>
  )}

export default Station