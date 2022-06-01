import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://run.mocky.io/v3/e69d7493-4a48-4fb6-8b06-fa922abb0b1f';
const API_URL_second =
  'https://run.mocky.io/v3/06a4be81-5449-4ed7-9574-927c9444e889';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  FirstResonse: {};
  secondResponse: {};
  constructor(private http: HttpClient) {}
  // public get(): Observable<any> {
  //   return this.http.get(API_URL).pipe(map((res) => res));
  // }
  public get() {
    const ApiFirst = this.http.get(API_URL);
    const ApiSecond = this.http.get(API_URL_second);
    forkJoin([ApiFirst, ApiSecond]).subscribe((result) => {
      this.FirstResonse = result[0];
      this.secondResponse = result[1];
      console.log(this.FirstResonse);
    });
  }
}
// /api/users
