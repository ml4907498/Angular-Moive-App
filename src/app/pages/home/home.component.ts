import { OMDBDataService } from 'src/app/services/OMDB-data.service';
import { Component, OnInit } from '@angular/core';
import { OMDBMovieBrief, fakeMovieBrief } from 'src/app/services/OMDB-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movieListData:OMDBMovieBrief[] = [fakeMovieBrief];
  showCard:boolean = false;
  movieData:OMDBMovieBrief = fakeMovieBrief

  constructor(
    private omdbDataService: OMDBDataService
  ){}

  ngOnInit(): void {
    this.omdbDataService.currentMovieListData
      .subscribe(data => {
        this.movieListData = data;
        this.movieData = data[0]
        console.log(data)
        // if(data.Title) this.showCard = true;
  })


    // this.lastFMDataService.currentMessage.subscribe(message => console.log(message))
  }
  

}
