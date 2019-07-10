import { Injectable } from '@angular/core';
import { FeedbackItem } from './feedback-item';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getAllFeedback() {

  }

  addFeedback() {

  }
  getRatings() {

  }


}
