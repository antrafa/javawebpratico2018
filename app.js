var ironman = {
  title: "Iron Man",
  releasedDate: "20/08/2013",
  budget: 200000,
  poster:"http://www.impawards.com/2010/posters/iron_man_two_ver6.jpg"
};

var thor = {
  title: "Thor",
  releasedDate: "08/11/2014",
  budget: 150000,
  poster:"http://www.impawards.com/2017/posters/thor_ragnarok.jpg"
};

var captainAmerica = {
  title: "Captain America",
  releasedDate: "01/05/2015",
  budget: 215000,
  poster:"http://www.impawards.com/2016/posters/captain_america_civil_war.jpg"
};

var tableBody = document.getElementById("tableBody");
var btnSave = document.getElementById("btnSave");
var txfTitle = document.getElementById("txfTitle");
var txfBudget = document.getElementById("txfBudget");
var txfPoster = document.getElementById("txfPoster");
var txfReleasedDate = document.getElementById("txfReleasedDate");

var movies = [];

var init = function(){
  addEventListeners();
  loadMovies();
}

var loadMovies = () => {
  tableBody.innerHTML = "";
  movies = localStorage.getItem("movies");
  debugger;
  var marvel = [ironman, thor, captainAmerica];
  movies = movies ? movies: marvel;
  movies.forEach((m) => printMovies(m));
}

var printMovies = function(movie){
    var row = "<tr>"+
      "<td>"+movie.title+"</td>"+
      "<td>"+movie.releasedDate+"</td>"+
      "<td>"+movie.budget+"</td>"+
      "<td><img src=\""+movie.poster+"\" width=\"80\" /></td>"+
      "<td> Actions </td>"+
    "</tr>";
    tableBody.innerHTML += row;
}

var getAndSaveMovie = function(e){
  if (e) e.preventDefault();
  var movie = {};
  movie.title = txfTitle.value;
  movie.releasedDate = txfReleasedDate.value;
  movie.budget = txfBudget.value;
  movie.poster = txfPoster.value;
  saveMovie(movie);
}

var saveMovie = function(movie){
  printMovies(movie);
  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
}

var addEventListeners = () => {
  btnSave.addEventListener("click", getAndSaveMovie);
}

window.onload = init();
