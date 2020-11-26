import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
  newContent: any;
  constructor(private contentService: ContentService) {
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  ngOnInit(): void {
  }
  addContent(): void{
    let newContentFromServer: Content;
    console.log('Trying to add the content to the list', this.newContent);
    this.contentService.addContent(this.newContent).subscribe(serverContent => {
      console.log('Added the content to the list', serverContent);
      newContentFromServer = serverContent;
      this.newContentEvent.emit(newContentFromServer);
    });
  }
  updateContent(): void{
    this.newContent.id = +this.newContent.id;
    console.log('Trying to update the content to the list', this.newContent);
    this.contentService.updateContent(this.newContent).subscribe(_ => {
      console.log('Content updated!');
      this.updateContentEvent.emit('content that was updated should be id: ' + this.newContent.id);
    });
  }
}
