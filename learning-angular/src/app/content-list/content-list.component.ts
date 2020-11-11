import {Component, Input, OnInit, Output} from '@angular/core';

import {Content} from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
   ourPromise = new Promise((success, fail) => {
    const testPass = true;
    if (testPass){
      success('it worked');
    } else{
      fail('it failed');
    }
  });
  constructor() {
    this.contentList = [{
      id: 0,
      author: 'Bob Ross',
      title: 'Forest Landscape',
      body: 'Painting of a forest and there are trees',
      type: 'art',
      tags: ['painting', 'art'],
      imageUrl: 'https://i.pinimg.com/originals/1f/34/c1/1f34c19665b48363b0b2dca74c59c101.jpg'
    }, {
      id: 1,
      author: 'Tod Howard',
      title: 'Elder Scrolls - Skyrim',
      body: 'This game has been ported at least 5 times',
      type: 'game',
      tags: ['action', 'rpg', 'storydriven'],
      imageUrl: 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-elder-scrolls-v-skyrim-switch/the-elder-scrolls-v-skyrim-switch-hero.jpg'
    }];
  }
  @Input() content: Content;
  contentList: Content[];
  ngOnInit(): void {
  }

  addGameToList(newGameFromChild: Content): void {
    this.ourPromise.then((successResult) => {
      console.log(successResult);
      this.contentList.push(newGameFromChild);
      this.contentList = Object.assign([], this.contentList);
    }).catch(failResult => {
      console.log(failResult);
    });
  }
  // exists(): void {
  //   // this.title = 'test';
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0; i < this.contentList.length; i++){
  //     if (this.title === this.contentList[i].title){
  //       console.log('exists');
  //     }
  //   }
  // }
}
