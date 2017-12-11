import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../movie.svc';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  movie: any;

  constructor(
    private service: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getMovie(params.get('id')))
        .subscribe(movie => this.movie = movie);
  }
}