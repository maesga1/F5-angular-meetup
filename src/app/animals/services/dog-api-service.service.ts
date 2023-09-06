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

<<<<<<< HEAD:src/app/animals/services/dog-api-service.service.ts
  getDogImages(count: number): Observable<Dogs[]> {
    return this.http.get<Dogs[]>(`${this.baseUrl}/breeds/image/random/${count}`);
  }
}
=======
  getDogImages(count: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/breeds/image/random/${count}`);
  }
}
>>>>>>> ecef9c7bdc66b989384a4aa50cc19d3b50d9814b:src/app/services/dog-api-service.service.ts
