import { Component, OnInit } from '@angular/core';
import { FeedbackItem } from '../feedback-item';


@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbackList: FeedbackItem[] = [
    {
      username: "Rahul Motwani",
      food: 3,
      atmosphere: 5,
      cleanliness: 3,
      service: 4,
      valueForMoney: 5,
      overall: 5,
      suggestion: "Do it better"
    }
  ];
  constructor() { }

  ngOnInit() {

  }


}
