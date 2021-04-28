import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyWorker } from '../models/myproducts.model';

@Injectable({
  providedIn: 'root'
})
export class HttpProductService {
  deleteProducts() {
    throw new Error('Method not implemented.');
  }

  routeApi = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProducts(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postProduct(data: MyWorker) {
    return this.http.post(this.routeApi, data).toPromise();
  }

  removeProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.routeApi}/${id}`);
  }

}
