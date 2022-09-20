import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://jsonplaceholder.typicode.com/posts"
  url1 = "https://newsapi.org/v2/everything?q=tesla&from=2022-08-13&sortBy=publishedAt&apiKey=ff481830b6114f9c8c367c17977e7767"

  constructor(private http: HttpClient) { }
  alldata() {
    return this.http.get(this.url)
  }
  allnews() {
    return this.http.get(this.url1)
  }
}
