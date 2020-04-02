import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyComponentService {
  constructor(private http: HttpClient) {}
  GetWeatherForcast() {
    const url = 'https://localhost:5001/api/mydata/data';
    const result = this.http.get(url);
    return result;
  }
}
