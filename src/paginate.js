const paginate = (songs, activePage, songsPerPage) => {
  const startFrom = (activePage - 1) * songsPerPage;

  return songs.slice(startFrom, startFrom + songsPerPage)
}

export default paginate