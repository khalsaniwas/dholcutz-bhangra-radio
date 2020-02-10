import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiConfig from '../../apiConfig'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

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
      })
      .then(() => props.alert({ heading: 'Success', message: 'All your songList', variant: 'success' }))
      .catch(console.error)
  }, [])
  const propertiesJsx = songList.map(song => (
    <ListGroup.Item variant="light" key={song.id}>
      <div>
        <Nav.Link href={`#songList/${song.id}`}> {song.artist} - {song.title}</Nav.Link>{song.length_text}
      </div>

    </ListGroup.Item>
  ))

  return (
    <div>
      <h1>Song List</h1>
      <ListGroup>
        {propertiesJsx}
      </ListGroup>
    </div>
  )
}

export default SongList