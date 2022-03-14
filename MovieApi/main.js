const getMovie = document.querySelector(".getMovie")
let getMovieName = document.querySelector(".getMovieName")
let movieName = ''
const OMDBKEY = '7035c60c'
const movieBox = document.querySelector(".movieBox")
const selectedMoviePoster = document.querySelector(".selectedMoviePoster")
const movieTitle = document.querySelector(".movieTitle")
const moviePlot = document.querySelector(".moviePlot")

getMovie.addEventListener("submit", function(event){
  event.preventDefault()
  movieName = getMovieName.value
  console.log(movieName)
  fetchMovies(movieName)
  getMovieName.value = ''
})

function fetchMovies(movieName){
  axios
    .get(`https://www.omdbapi.com/?apikey=${OMDBKEY}&s=${movieName}`)
    .then((response) => {
      console.log(response)
      while( movieBox.hasChildNodes()){
        movieBox.removeChild(movieBox.firstChild)
      }
      const moviePosters = []

      for(let i=0; i<response.data.Search.length;i++){
        moviePosters.push(response.data.Search[i])
      }
      console.log(moviePosters)
      console.log(response.data)

      moviePosters.forEach(function(movie) {
        const moviePost = document.createElement("div")
        moviePost.classList.add("movePost")
        const moviePoster = document.createElement("img")
        moviePoster.src = movie.Poster
        moviePoster.addEventListener("click", function(){
          viewInfo(movie)
        })
        console.log(movie)
        moviePost.append(moviePoster)
        movieBox.append(moviePost)
      })
    })
}

function viewInfo(movie){
  selectedMoviePoster.src = movie.Poster
  movieTitle.innerText = movie.Title
  axios
    .get(`https://www.omdbapi.com/?apikey=${OMDBKEY}&i=${movie.imdbID}`)
    .then((response) => {
      console.log(response.data)
      moviePlot.innerText = response.data.Plot
    })
}