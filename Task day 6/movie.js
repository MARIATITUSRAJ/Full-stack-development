

class Movie {
    constructor(movieTitle,movieStudio,movieRating= 'PG' ) 
    {
        this.Title=movieTitle,
        this.Studio=movieStudio,
        this.Rating=movieRating
    }
    get PGdata(){
        return this.movieRating;
    }
}

const movie1=new Movie("leo","Sun Pictures","U/A");
console.log(movie1);
const movie2=new Movie("KGF","Lyca Production",);
const movie3=new Movie("Pirates of the Caribben","MGM",);
const movie4=new Movie("RDX","Flim Production",);
const moviecollection=[movie2,movie3,movie4];
console.log(moviecollection);
const movies=[new Movie(" "," ")];
console.log(movies);

const movie5=new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie5);
console.log(movie5.Title);
console.log(movie5.Studio);
console.log(movie5.Rating);
