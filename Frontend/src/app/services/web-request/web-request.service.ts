import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  // GET
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  // POST
  post(uri: string, body: object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, body);
  }

  // UPDATE
  patch(uri: string, body: object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, body);
  }

  // (Soft) DELETE
  delete(uri: string) {
    console.log('delete URI: ' + uri);
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
