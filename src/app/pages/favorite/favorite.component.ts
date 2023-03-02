import { Component } from '@angular/core';
import { FavoriteMovieDataService } from 'src/app/services/favoriteMovie-data.service';
import { OMDBMoiveDetial } from 'src/app/services/OMDB-data.service';
import { OMDBDataService } from 'src/app/services/OMDB-data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})


export class FavoriteComponent {
  movieListData:OMDBMoiveDetial[] = [];

  constructor(
    private favoriteMovieDataService: FavoriteMovieDataService,
    private omdbDataService: OMDBDataService
  ){}
  
  // request the detail information of the movies based on the imdbIdList
  ngOnInit(): void {
    this.favoriteMovieDataService.currentimdbIdList.subscribe(data => {
      this.movieListData = [];
      data.forEach((id:string)=>{
        this.omdbDataService.getMoiveDetialById(id).subscribe(data=>this.movieListData.push(data))
        console.log(this.movieListData)
      })
    })
  }
}
