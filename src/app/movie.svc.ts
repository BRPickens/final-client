import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export interface MovieInterface {
    id?: number;
    title?: string;
    director?: string;
    poster?: string;
}
@Injectable()
export class MovieService {
    static api = '/api';
    movie: MovieInterface;
    movies: Array<MovieInterface>;

    constructor(
        private http: HttpClient
    ) { }

    getMovies(): Observable<any> {
        return this.http.get(MovieService.api);
    }

    getMovie(id): Observable<any> {
        return this.http.get(`${MovieService.api}/${id}`);
    }

    insertMovie(movie): Observable<any> {
        return this.http.post(MovieService.api, movie);
    }
}