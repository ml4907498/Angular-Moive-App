import { Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators'


export interface OMDBResponse {
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

export const fakeMovieData = {
    Title: "init",
    Year: "2020",
    Rated: "N/A",
    Released: "04 Nov 2020",
    Runtime: "6 min",
    Genre: "Short, Crime",
    Director: "Sem Cuypers",
    Writer: "Sem Cuypers, Noah De Meester",
    Actors: "Noah De Meester, Nathan Van den Broeck, Jade Kombe Wa Kombe",
    Plot: "An original interpretation of the Joker's origin story as an entry for Hans Zimmer's video contest hosted by Sony Music, Enter the World of Hans Zimme: The Dark Knight.",
    Language: "English",
    Country: "Belgium",
    Awards: "N/A",
    Poster: "https://m.media-amazon.com/images/M/MV5BYjYyNjQ4OWUtYjBlNy00MDNmLThiYjctMjA5ZGJhMmU0MDZmXkEyXkFqcGdeQXVyMTAzODc3NDQy._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.6/10"
      }
    ],
    Metascore: "N/A",
    imdbRating: "8.6",
    imdbVotes: "14",
    imdbID: "tt14124486",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
}

@Injectable({
    providedIn: 'root'
})
export class OMDBDataService{
    // private messageSource = new BehaviorSubject('default message');
    // currentMessage = this.messageSource.asObservable();

    
    private movieData:BehaviorSubject<any> = new BehaviorSubject({});
    currentMovieData = this.movieData.asObservable()

    // private albumData:BehaviorSubject<any> = new BehaviorSubject({'results':""});
    // currentAlbumData = this.albumData.asObservable()


    constructor(private http: HttpClient){}


    // TODO - replace the api for searching a movie list
    public searchByTitle(title: string){
        this.http.get<OMDBResponse>(`http://www.omdbapi.com/?i=tt2313197&apikey=e7d1080&t=${title}&plot=full`)
            // .pipe(map((data: LastFmArtistResponse) => data.results.artistmatches.artist.slice(0, 5)))
            .subscribe(data => this.movieData.next(data))
    }




}