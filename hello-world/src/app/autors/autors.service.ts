import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorsService {

  constructor() { }

  getAutors(){
    return ["author1", "author2", "author3"];
  }
}
