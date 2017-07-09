import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HackernewsApiService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
   }

  // fetchStories(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/topstories.json`)
  //                   .map(response => response.json())
  //                   .do(value => console.log(value))
  // }
  fetchStories(storyType: string, page:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${storyType}?page=${page}`)
                    .map(response => response.json());
  }
  fetchItem(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/item/${id}.json`)
                    .map(response => response.json());
  }
}
