const apikey="406c6fc887fcce887ed5ba85251c8e4a";
const apiEndpoint="https://api.themoviedb.org/3";
const imgpath="https://image.tmdb.org/t/p/orginal";

const apipaths={
    fetchAllCategories:`${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList:(id)=> `${apiEndpoint}/discover/movie/list?api_key=${apikey}&with_genres=${id}`,
}
// boots up app
function init(){
    fetchAndBuildAllSections();//calling
}
function fetchAndBuildAllSections(){
    fetch(apipaths.fetchAllCategories)
    .then((res) =>res.json())
    .then((res) =>console.table(res.genres))
    .catch((err) => console.error(err))
}
window.addEventListener("load", function(){
    init();
})