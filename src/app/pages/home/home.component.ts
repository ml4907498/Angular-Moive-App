import { OMDBDataService } from 'src/app/services/OMDB-data.service';
import { Component, OnInit } from '@angular/core';
import { OMDBResponse, fakeMovieData } from 'src/app/services/OMDB-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movieData:OMDBResponse = fakeMovieData;
  showCard:boolean = false;

  constructor(
    private omdbDataService: OMDBDataService
  ){}

  ngOnInit(): void {
    this.omdbDataService.currentMovieData
      .subscribe(data => {
        console.log(data.Title)
        this.movieData = data;
        if(data.Title) this.showCard = true;
  })


    // this.lastFMDataService.currentMessage.subscribe(message => console.log(message))
  }
  

}
