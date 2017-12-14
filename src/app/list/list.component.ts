import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MovieService, MovieInterface } from '../movie.svc';
import { RouterLink, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: MovieService
  ) {
    this.form = this.fb.group({
      title: [''],
      director: [''],
      poster: ['']
    });
  }

  movies: Array<MovieInterface>;
  ngOnInit() {
    this.service.getMovies()
      .subscribe((movies) => {
        this.movies = movies;
        console.log(movies);
      });
  }

  insertMovie() {
    const add = (this.form.value);
    console.log(add);
    this.service.insertMovie(add)
      .subscribe(() => {
        console.log(add);
      })
      window.location.reload()
  }

}