import {Component, Input, OnInit} from '@angular/core';

import {Content} from '../helper-files/content-interface';
import {CONTENTLIST} from '../helper-files/ContentDB';
import {ContentService} from '../services/content.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  @Input() content: Content;
  contentList: Content[];
  title = '';
  constructor(private contentService: ContentService) {
  }
  ngOnInit(): void {
    // this.contentList = this.contentService.getContent();
    this.contentList = [];
    this.getTheContentList();
  }


  exists(): void {
    // this.title = 'test';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.contentList.length; i++){
      if (this.title === this.contentList[i].title){
        console.log('exists');
      }
    }
  }
  addContentToList(content: Content): void {
    this.contentList.push(content);
    // We need to clone the array for the pipe to work
    this.contentList = Object.assign([], this.contentList);
  }
  updateTheList(message: string): void{
    console.log(message);
    this.getTheContentList();
  }

  getTheContentList(): void{
    this.contentService.getContent().subscribe(cl => {
      // content came back, log length
      this.contentList = cl;
      console.log(cl.length);
    });
  }
}
