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

// omdb api
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

const today = new Date()
const year = today.getFullYear()
const month = String(today.getMonth() + 1).padStart(2, '0')
const day = String(today.getDate() -1).padStart(2,'0')
const weekDay = String(today.getDate() -7).padStart(2, '0')
const todayTop10 = []
const weekTop10 = []
console.log(year, month, day)

// kobisopen api
axios
  .get(`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1789e1cbb3fccb20d4941ba376ade392&targetDt=${year}${month}${day}`)
  .then((response) => {
    for(let i=0;i<response.data.boxOfficeResult.dailyBoxOfficeList.length;i++){
      todayTop10.push(response.data.boxOfficeResult.dailyBoxOfficeList[i].movieNm)
    }
    console.log(todayTop10)
  })

axios
  .get(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=1789e1cbb3fccb20d4941ba376ade392&targetDt=${year}${month}${weekDay}`)
  .then((response) => {
    console.log(response)
  })

const top10 = document.querySelector(".top10")
const btn = document.querySelector(".btn")
const ID_KEY = '7YAadA8ozr7BP0mY5COl'
const SECRET_KEY = 'hCQuTfFE3Z'

// naver movie api
btn.addEventListener("click", function(){
  for(let topMovie of todayTop10){
    console.log(topMovie)
    axios.get('https://cors-anywhere.herokuapp.com/https://openapi.naver.com/v1/search/movie.json', {
      params: {
        query: topMovie,
      },
      headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE"
      }
    }).then((response) => {
      console.log(response.data.items[0])
    })
  }
})

// yts api

const testGetMovie = document.querySelector("#getMovie")
const testGetMovieName = document.querySelector("#getMovieName")
const testMovieBox = document.querySelector("#movieBox")
const testSelectedMoviePoster = document.querySelector("#selectedMoviePoster")
const testMovieTitle = document.querySelector("#movieTitle")
const testMoviePlot = document.querySelector("#moviePlot")

let testMovie = ''
let actionMovie = []

testGetMovie.addEventListener("submit", function(event){
  event.preventDefault()
  testMovie = testGetMovieName.value
  console.log(testMovie)
  testfetchMovie(testMovie)
})

function testfetchMovie(testMovie){
  axios
    .get(`https://yts.mx/api/v2/list_movies.json?query_term=${testMovie}`)
    .then((response) => {
      console.log(response)
      const testMovieList = []
      while( testMovieBox.hasChildNodes()){
        testMovieBox.removeChild(testMovieBox.firstChild)
      }
      for(let i=0;i<response.data.data.movie_count;i++){
        testMovieList.push(response.data.data.movies[i])
      }
      console.log(testMovieList)

      testMovieList.forEach(function(movie){
        const testShowMovie = document.createElement("div")
        testShowMovie.classList.add("movePost")
        const testMoviePoster = document.createElement("img")
        testMoviePoster.src = movie.medium_cover_image
        testMoviePoster.addEventListener("click", function(){
          testviewInfo(movie)
        })
        console.log(movie)
        testShowMovie.append(testMoviePoster)
        testMovieBox.append(testShowMovie)
      })
    })
}

function testviewInfo(movie){
  testSelectedMoviePoster.src = movie.medium_cover_image
  testMovieTitle.innerText = movie.title
  testMoviePlot.innerText = movie.synopsis
}