const getMovie = document.querySelector(".getMovie")
let getMovieName = document.querySelector(".getMovieName")
let movieName = ''
const movieBox = document.querySelector(".movieBox")

getMovie.addEventListener("submit", function(event){
  event.preventDefault()
  movieName = getMovieName.value
  console.log(movieName)
  fetchMovies(movieName)
  getMovieName.value = ''
})

function fetchMovies(movieName){
  axios
    .get(`https://www.omdbapi.com/?apikey=7035c60c&s=${movieName}`)
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

      moviePosters.forEach(function(item) {
        const moviePost = document.createElement("div")
        moviePost.classList.add("movePost")
        const moviePoster = document.createElement("img")
        moviePoster.src = item.Poster
        console.log(item)
        moviePost.append(moviePoster)
        movieBox.append(moviePost)
      })
    })
}

