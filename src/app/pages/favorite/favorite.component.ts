import { Component } from '@angular/core';
import { OMDBMoiveDetial } from 'src/app/services/OMDB-data.service';
import { FavoriteMovieDataService } from 'src/app/services/favoriteMovie-data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})



export class FavoriteComponent {
  favoriteList: OMDBMoiveDetial[] = [];
  count:number = 0;

  constructor(
    private favoriteMovieDataService: FavoriteMovieDataService
  ){}
  
  ngOnInit(): void {
    // this.favoriteMovieDataService.currentMovieListData
    //   .subscribe(data => {
    //     console.log(data)
    //     this.favoriteList = data;
    // })
  }
}
