import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
    private heroesUrl = 'http://595f639f362a4500113d54dd.mockapi.io/api/heroes/';  // URL to web api
    heroes: Observable<Hero[]>;
    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`${this.heroesUrl}?search=${term}`)
            .map(response => response.json() as Hero[]);
    }
}