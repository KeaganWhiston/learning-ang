import {Component, Input, OnInit} from '@angular/core';

import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  @Input() content: Content;
  constructor() {
  }
  ngOnInit(): void {
  }

  myFunction(): void {
    console.log(this.content.id);
  }
}
