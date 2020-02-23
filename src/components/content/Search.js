

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import React from 'react'

const SearchSong = props => {

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={props.searchTerm}
        onChange={props.handleChange} />
    </Form>
  )
}

export default SearchSong