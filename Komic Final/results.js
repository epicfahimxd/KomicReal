localStorage = window.localStorage;
var comicResults = JSON.parse(localStorage.getItem("comicResults"));
console.log(comicResults);
$('#resultsName').append("<h1>Results For"+" "+comicResults[0].hero+"</h1>");

for(i=0; i<comicResults.length; i++){
    $('#comicResults').append(
        "<img style='margin-left: 30px; text-align:left; font-style: roboto; margin-right: 30px; text-align: center; height: 360px; width: 230px;' class='comicBookCovers' src='"+comicResults[i].imgUrl+"'/>"
    );
}