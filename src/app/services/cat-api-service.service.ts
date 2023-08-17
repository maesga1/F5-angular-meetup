import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  private baseUrl = 'https://api.thecatapi.com/v1';
  private apiKey = 'live_JiaYTKUBaGODECAdILFOBQnxvaZCp1dV0iQp8stVgsSQOrUQoMR6v1Xy56KmMvGs';

  constructor(private http: HttpClient) {}

  getRandomCatImage(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get(`${this.baseUrl}/images/search`, { headers });
  }

getCatImages(count: number): Observable<any> {
  const headers = new HttpHeaders({
    'x-api-key': this.apiKey
  });

  return this.http.get(`${this.baseUrl}/images/search?limit=${count}`, { headers }).pipe(
    tap((response: any) => {
      console.log('API Response:', response); // Agregar el console.log para depuración
    }),
    map((response: any) => {
      if (response && Array.isArray(response)) {
        return response.map((cat: any) => cat.url);
      } else {
        console.error('Invalid API Response:', response);
        return [];
      }
    })
  );
}

  

}
