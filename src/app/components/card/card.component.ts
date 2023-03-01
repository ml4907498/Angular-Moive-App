import { Component, Input } from '@angular/core';
import { OMDBMovieBrief, fakeMovieBrief } from 'src/app/services/OMDB-data.service';
import { FavoriteMovieDataService } from 'src/app/services/favoriteMovie-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: OMDBMovieBrief;
  componentName:String = 'brief';
  isBasic:Boolean = true;
  
  constructor(
    private favoriteMovieDataService: FavoriteMovieDataService
  ){
    this.data = fakeMovieBrief;
    // this.favoriteMovieDataService.getIsFavorite(this.data)
    // this.isBasic = !this.favoriteMovieDataService.getIsFavorite(this.data)
  }

  // ngOnInit(): void {
  //   this.favoriteMovieDataService.currentMovieTitleListData
  //     .subscribe(data => {
  //       this.isBasic = !this.favoriteMovieDataService.getIsFavorite(this.data)
  //   })
  // }


  addToFavoriteList(){
    // this.favoriteMovieDataService.getIsFavorite(this.data)
    this.isBasic = !this.isBasic;
    console.log(this.isBasic);
    if(this.isBasic){
      // this.favoriteMovieDataService.addFavoriteMovie(this.data);
      // console.log('add:' + this.data)
    }
    else{
      // this.favoriteMovieDataService.removeFavoriteMovie(this.data);
    }
  }
}
