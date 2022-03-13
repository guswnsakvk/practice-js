const getMovie = document.querySelector(".getMovie")
let moveName = document.querySelector(".movieName")

getMovie.addEventListener("submit", function(event){
  event.preventDefault()
  console.log(moveName.value)
})

function fetchMovies(){
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((response) => {
      console.log(response)
      const movie = document.querySelector("h1")
      const moviePost = document.querySelector("img")
      movie.innerText = response.data.Search[0].Title
      moviePost.src = response.data.Search[0].Poster
    })
}

fetchMovies()