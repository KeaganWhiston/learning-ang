import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
   myList: ContentList;
   showContent: string;
  constructor() {
    this.myList = new ContentList({
      id: 2,
      author: 'Keagan Whiston',
      title: 'Minecraft Steve in Smash',
      body: 'Steve from the hit game is now in Super Smash Brothers.'
    });
    this.myList = new ContentList({
      id: 1,
      author: 'Bob',
      title: 'Cool title',
      body: 'Interesting body'
    });
    this.myList = new ContentList({
      id: 2,
      author: 'Jake Jackson',
      title: 'One second title',
      body: 'Timer is set'
    });
    this.showContent = this.myList.getContent();
  }
  ngOnInit(): void {
  }
}

console.log();
