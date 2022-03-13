const getMovie = document.querySelector(".getMovie")
let getMovieName = document.querySelector(".getMovieName")
let movieName = ''

getMovie.addEventListener("submit", function(event){
  event.preventDefault()
  movieName = getMovieName.value
  console.log(movieName)
  fetchMovies(movieName)
})

function fetchMovies(movieName){
  axios
    .get(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
    .then((response) => {
      console.log(response)
      const movie = document.querySelector("h1")
      const moviePost = document.querySelector("img")
      movie.innerText = response.data.Search[0].Title
      moviePost.src = response.data.Search[0].Poster
    })
}

