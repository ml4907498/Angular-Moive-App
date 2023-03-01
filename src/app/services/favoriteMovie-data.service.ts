import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FavoriteMovieDataService{
    private imdbIdList:BehaviorSubject<any> = new BehaviorSubject(new Set<string>());
    currentimdbIdList = this.imdbIdList.asObservable();

    constructor(){}

    public addFavoriteMovie(imdbId: string){
        const newList = this.imdbIdList.getValue();
        newList.add(imdbId);
        this.imdbIdList.next(newList)
        console.log(newList);
    }

    public removeFavoriteMovie(imdbId: string){
        const newList = this.imdbIdList.getValue();
        newList.delete(imdbId);
        this.imdbIdList.next(newList)
        console.log(newList);
    }

    public getIsFavorite(imdbId: string):boolean{
        console.log(this.imdbIdList.getValue().has(imdbId))
        return this.imdbIdList.getValue().has(imdbId)
    }

}