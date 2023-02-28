import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { OMDBDataService } from 'src/app/services/OMDB-data.service';
import { FavoriteMovieDataService } from 'src/app/services/favoriteMovie-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  inputsValue = {
    title: '',
    year: '',
    imdb: ''
  };
  toppings = new FormControl('');
  count = 0;

  toppingList: string[] = ['Title', 'IMBD ID'];
  selectedOption:string = this.toppingList[0];

  
  constructor(
    private omdbDataService: OMDBDataService,
    private favoriteMovieDataService: FavoriteMovieDataService
  ){}

  // TODO - counter
  ngOnInit(): void {
    this.favoriteMovieDataService.currentMovieListData
      .subscribe(data => {
        console.log(data.length)
        this.count = data.length;
    })
  }

  handleKeyDown(){
    console.log(this.inputsValue.title)
    this.omdbDataService.searchByTitle(this.inputsValue.title);
  }


}
