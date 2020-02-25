import paginate from './paginate'

it("paginate return correct songs", () => {
  const songs = [1,2,3,4,5,6,7,8,9,10]
  const songsPerPage = 5
  const result = paginate(songs, 1, songsPerPage)
  expect(result).toEqual([1,2,3,4,5])
})