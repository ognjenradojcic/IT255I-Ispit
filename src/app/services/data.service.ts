import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { smartPhone } from '../models/smartphone.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = "https://dummyjson.com/products";

  constructor(public http: HttpClient) { }

  getSmartphones() {
    return this.http.get<smartPhone[]>(this.API_URL);
  }

  getSmartphone(id: number){
    return this.http.get<smartPhone>(`${this.API_URL}/${id}`);
  }

  create(phone: smartPhone){
    return this.http.post<smartPhone>(this.API_URL, phone);
  }

  update(phone: smartPhone){
    return this.http.put<smartPhone>(`${this.API_URL}/${phone.id}`, phone);
  }

  delete(phone: smartPhone){
    
    return this.http.delete<smartPhone>(`${this.API_URL}/${phone.id}`);
  }
}
