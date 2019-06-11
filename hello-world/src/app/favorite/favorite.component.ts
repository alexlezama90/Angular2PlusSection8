import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;

  // @Output() change = new EventEmitter();
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    // this.change.emit(this.isSelected);
    this.click.emit({ newValue: this.isSelected}) //We can pass any kind of value or object
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
