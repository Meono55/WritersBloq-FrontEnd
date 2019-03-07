import { Component, OnInit, Input } from '@angular/core';
import Story from '../../../models/Story.model';

@Component({
  selector: 'app-my-story-card',
  templateUrl: './my-story-card.component.html',
  styleUrls: ['./my-story-card.component.scss']
})
export class MyStoryCardComponent implements OnInit {
  @Input() story: Story

  constructor() { }

  ngOnInit() {
  }

}
