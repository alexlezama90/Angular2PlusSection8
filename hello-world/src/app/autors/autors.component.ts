import { Component, OnInit } from '@angular/core';
import { AutorsService } from './autors.service';

@Component({
  selector: 'app-autors',
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.css']
})
export class AutorsComponent implements OnInit {
  authors: string[];

  constructor(private service: AutorsService) { }

  ngOnInit() {
    this.authors = this.service.getAutors();
  }

  getTitle(){
    return this.authors.length + " Authors";
  }

}
