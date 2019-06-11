import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  // @Output() click = new EventEmitter();

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    // let tweetData = new TweetData('...', this.likesCount, this.isActive);

    // this.click.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

// export interface ITweetData{
//   body: string;
//   likesCount: number;
//   isLiked: boolean;
// }

// export class TweetData implements ITweetData{

//   constructor(public body: string, public likesCount: number, public isLiked: boolean) {
//   }
// }
