import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Search from './Search'
import Button from 'react-bootstrap/Button'
import './SongList.css';

const SongList = props => {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    axios({
      url: `${apiConfig.apiUrl}/station/1/files`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiConfig.token}`
      }
    })
      .then(response => {
        console.log(response.data)
        setSongList(response.data)
        setSearchResults(response.data)
      })
      .then(() => props.alert({ heading: 'Success', message: 'All your songList', variant: 'success' }))
      .catch(console.error)
  }, [])

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const [searchResults, setSearchResults] = React.useState([]);
  React.useEffect(() => {
    const results = songList.filter(song =>
      song.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const propertiesJsx = searchResults.map(song => (
    <ListGroup.Item variant="light" key={song.id}>
      <div className="song-item">
        <div className="song-info">
          <Nav.Link href={`#songList/${song.id}`}> {song.artist} - {song.title}</Nav.Link>
          <span className="song-length">{song.length_text}</span>
        </div>
        
        <Button className="request-button">request</Button>
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