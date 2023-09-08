import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'https://fakestoreapi.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/products`,);
  }

  getDetail(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/products/${id}`,);
  }

  getAllCategories(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/products/categories`,);
  }
}
