import { Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


export interface OMDBMoiveDetial {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string; }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface OMDBMovieBrief {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface OMDBMovieList {
    Search: OMDBMovieBrief[];
    totoalResults: string;
    Response: string;
}

export interface OMDBMovieListError {
    Response: string;
    Error: string;
}

type OMDBMoiveListResponse = OMDBMovieList | OMDBMovieListError;

export const fakeMovieDetial:OMDBMoiveDetial = {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [
      {
        Source: "",
        Value: ""
      }
    ],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: ""
}

export const fakeMovieBrief:OMDBMovieBrief = {
    Title: "",
    Year: "",
    imdbID: "",
    Type: "",
    Poster: ""
}

export const fakeErrorResponse:OMDBMovieListError = {
    Response: "Error",
    Error: "Movie not found!"
}

@Injectable({
    providedIn: 'root'
})
export class OMDBDataService{
    private responseMessage = new BehaviorSubject('default message');
    currentResponseMessage = this.responseMessage.asObservable();

    private movieListData:BehaviorSubject<any> = new BehaviorSubject([]);
    currentMovieListData = this.movieListData.asObservable()

    constructor(private http: HttpClient){}

    public searchByTitle(searchOptions:{title: string, year: string}){
        this.http.get<OMDBMoiveListResponse>(`http://www.omdbapi.com/?apikey=e7d1080&s=${searchOptions.title}&y=${searchOptions.year}&plot=full`)
            .subscribe(res => {
                if ('Search' in res){
                    console.log(res.Search);
                    this.movieListData.next(res.Search);
                } else {
                    console.error(res.Error);
                    this.movieListData.next([]);
                    this.responseMessage.next(res.Error);
                }
            })
    }

    public getMoiveDetialById(imdbId: string){
        return this.http.get<OMDBMoiveDetial>(`http://www.omdbapi.com/?apikey=e7d1080&i=${imdbId}&plot=full`)
    }
}