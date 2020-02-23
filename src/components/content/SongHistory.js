import React from 'react'

const SongHistory = props => {

  if (!props.history) {
    return <p>Loading stuff...</p>
  }

  return (
    <ol>
      <h4>Song History</h4>
      {props.history.map(song => 
          <li>{song.song.text}
          </li>
      )} 
    </ol>
  )

}

export default SongHistory