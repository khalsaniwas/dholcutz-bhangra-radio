import React from 'react'

const SongHistory = props => {

  if (!props.history) {
    return <p>Loading stuff...</p>
  }

  return (
    <div>
      <h4>Song History</h4>
      {props.history.map(song => 
        <div>{song.song.text}</div>
      )} 
    </div>
  )

}

export default SongHistory