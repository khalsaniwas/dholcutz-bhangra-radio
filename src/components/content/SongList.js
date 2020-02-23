import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import Search from './Search'
import Request from './Request'
import './SongList.css';

const SongList = props => {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    axios({
      url: `${apiConfig.apiUrl}/station/${apiConfig.stationId}/requests`,
      method: 'GET'
    })
      .then(response => {
        console.log(response.data)
        setSongList(response.data)
        setSearchResults(response.data)
      })
      .catch(console.error)
  }, [])

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const [searchResults, setSearchResults] = React.useState([]);
  React.useEffect(() => {
    const results = songList.filter(song =>
      song.song.title.toLowerCase().includes(searchTerm) || song.song.artist.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, songList]);

  const propertiesJsx = searchResults.map(song => (
    <ListGroup.Item variant="dark" key={song.song.id}>
      <div className="song-item">
        <div className="song-info">
          {song.song.text}<br />
          <span className="song-album">{song.song.album}</span>
        </div>
        <Request 
          requestId={song.request_id} />
        
      </div>

    </ListGroup.Item>
  ))

  return (
    <div>
      <h1>Song List</h1>
      <Search
        searchTerm={searchTerm}
        handleChange={handleChange} />
      <ListGroup>
        {propertiesJsx}
        
      </ListGroup>
    </div>
  )
}

export default SongList