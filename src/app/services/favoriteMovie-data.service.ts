import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { OMDBResponse } from "./OMDB-data.service";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FavoriteMovieDataService{
    // private count = new BehaviorSubject(0);
    // currentCount = this.count.asObservable();

    private movieListData:BehaviorSubject<any> = new BehaviorSubject([]);
    currentMovieListData = this.movieListData.asObservable();

    private movieTitleList: BehaviorSubject<any> = new BehaviorSubject([]);
    // currentMovieTitleListData = this.movieTitleList.asObservable();

    constructor(){}

    public addFavoriteMovie(movieData: OMDBResponse){
        this.movieListData.getValue().push(movieData);
        this.movieTitleList.getValue().push(movieData.Title);
        console.log((this.movieListData));
        console.log((this.movieTitleList));
    }

    // TODO
    public removeFavoriteMovie(movieData: OMDBResponse){
        // this.currentMovieListData.value.filter(val = > val.Title !== movieData.Title)
        // // .pipe(map(arr => arr.filter(val = > val.Title !== movieData.Title)))
        // .subscribe(data=>{
        //     this.movieListData.next([...data, movieData])
        // })
    }

    // TODO - Use IMDB ID 
    public getIsFavorite(movieData: OMDBResponse){
        console.log(this.movieTitleList.getValue())
        // return this.movieTitleList.getValue().inculde(movieData.Title)
    }

    // public addCount(movieData: OMDBResponse){
    //     this.currentMovieListData.subscribe(data=>{
    //         this.movieListData.next([...data, movieData])
    //     })
    // }


}