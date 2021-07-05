import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [];
  http = new import { Injectable } from '@angular/core';

  @Injectable({providedIn: 'root'})
  export class ServiceNameService {
    constructor(private httpClient: HttpClient) { }

  };

}
