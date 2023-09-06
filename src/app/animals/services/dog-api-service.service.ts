import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dogs } from '../model/Dogs.model';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {
  private baseUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getDogImages(count: number): Observable<Dogs[]> {
    return this.http.get<Dogs[]>(`${this.baseUrl}/breeds/image/random/${count}`);
  }
}
