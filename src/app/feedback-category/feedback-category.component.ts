import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-category',
  templateUrl: './feedback-category.component.html',
  styleUrls: ['./feedback-category.component.css']
})
export class FeedbackCategoryComponent implements OnInit {

  @Input() category: Object;

  @Output() valueChange = new EventEmitter();



  constructor() { }

  ngOnInit() {

  }
  onRatingChange(event) {
    // alert(event.rating);
    this.valueChange.emit(event.rating);

  }


}
