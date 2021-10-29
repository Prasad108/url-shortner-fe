import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortnerService {

  baseURL: string = "http://localhost:8080/";


  constructor(private http: HttpClient) { 
  }

  shortenUlr(urlStr:string):Observable<any>{
      var headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');
      headers_object.append("Authorization", "Basic " + btoa("user:Password@123"));

      const httpOptions = {
        headers: headers_object
      };
        
      const body = {"url":urlStr}
      return this.http.post(this.baseURL + 'api/shortenUrl',body,httpOptions);
  }
}
