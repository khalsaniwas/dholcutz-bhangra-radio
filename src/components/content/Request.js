const Button = props => {

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

export default Button