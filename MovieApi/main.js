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
    })
    .catch(error => console.error(error))
}

fetchMovies()