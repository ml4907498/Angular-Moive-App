import { OMDBDataService } from 'src/app/services/OMDB-data.service';
import { Component, OnInit } from '@angular/core';
import { OMDBMovieBrief } from 'src/app/services/OMDB-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movieListData:OMDBMovieBrief[] = [];
  showCard:boolean = false;

  constructor(
    private omdbDataService: OMDBDataService
  ){}

  ngOnInit(): void {
    this.omdbDataService.currentMovieListData
      .subscribe(data => {
        this.movieListData = data;
        console.log(data)
    })
  }
}
