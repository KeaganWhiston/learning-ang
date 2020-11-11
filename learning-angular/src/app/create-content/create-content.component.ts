import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  constructor() {this.newGame = {
    id: 0,
    author: '',
    title: '',
    body: '',
    type: '',
    tags: [''],
    imageUrl: ''
  }; }
  @Output() newGameEvent = new EventEmitter<Content>();
  newGame: Content;

  ngOnInit(): void {
  }

  addGame(): void{
    console.log('event emitted', this.newGame.title);
    this.newGameEvent.emit(this.newGame);
    this.newGame.author = '';
    this.newGame.title = '';
    this.newGame.body = '';
    this.newGame.type = '';
    this.newGame.imageUrl = '';
  }
}
