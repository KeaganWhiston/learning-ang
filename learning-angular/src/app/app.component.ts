import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learning-angular';
}


let name: string;

name = 'Peter';

let isType: boolean;

isType = false;

function doThing(): void{
  return;
}

interface Content {
  readonly id: number;
  body?: string;
  type: string;
  imageUrl: string;
}

let newsArticle: Content = {
  id: 0,
  body: 'Wow so cool',
  type: 'news',
  imageUrl: 'https://cdn.discordapp.com/attachments/695721960650309645/761283416376475688/image0.jpg'
};



function displayInfo(c: Content): void {
  console.log(c.body);
}

displayInfo(newsArticle);

class ContentList{
  static contentCount = 0;
  items: Content[];
  constructor(item: Content) {
    this.items[0] = item;
    this.increaseCount();
  }
  increaseCount(): number{
    return ++ContentList.contentCount;
  }
}
