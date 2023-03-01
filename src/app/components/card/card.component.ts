import { Component, Input, OnInit } from '@angular/core';
import { OMDBDataService, OMDBMovieBrief, OMDBMoiveDetial, fakeMovieBrief, fakeMovieDetial } from 'src/app/services/OMDB-data.service';
import { FavoriteMovieDataService } from 'src/app/services/favoriteMovie-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() data: OMDBMovieBrief;
  componentName:String = 'brief';
  isBasic:Boolean = true;
  count = 0;

  detialData: OMDBMoiveDetial = fakeMovieDetial;
  
  constructor(
    private favoriteMovieDataService: FavoriteMovieDataService,
    private omdbDataService: OMDBDataService,
  ){
    this.data = fakeMovieBrief;
  }

  ngOnInit(): void {
    this.isBasic = !this.favoriteMovieDataService.getIsFavorite(this.data.imdbID);
  }


  getMoiveDetial(){
    this.omdbDataService.getMoiveDetial(this.data.Title)
      .subscribe(data => this.detialData = data);
  }


  addToFavoriteList(){
    if(this.isBasic){
      this.favoriteMovieDataService.addFavoriteMovie(this.data.imdbID);
      this.favoriteMovieDataService.currentimdbIdList.subscribe(data=>console.log(data))
    }
    else{
      this.favoriteMovieDataService.removeFavoriteMovie(this.data.imdbID);
      this.favoriteMovieDataService.currentimdbIdList.subscribe(data=>console.log(data))
    }
    this.isBasic = !this.isBasic;
    console.log(this.isBasic);
  }
}
