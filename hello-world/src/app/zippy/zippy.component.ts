import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  @Input('title') title: string;
  isExpanded: boolean = true;

  toogle(){
    this.isExpanded = !this.isExpanded;
  }


}
