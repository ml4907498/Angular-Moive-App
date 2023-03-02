import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { OMDBDataService } from 'src/app/services/OMDB-data.service';
import { FavoriteMovieDataService } from 'src/app/services/favoriteMovie-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
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
    private favoriteMovieDataService: FavoriteMovieDataService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.favoriteMovieDataService.currentimdbIdList.subscribe(data => {
      this.count = data.size;
      console.log(data.size)
    })
  }

  handleKeyDown(){
    console.log(this.inputsValue.title);
    this.omdbDataService.searchByTitle(this.inputsValue.title);
    this.router.navigate(['/']);
  }


}
