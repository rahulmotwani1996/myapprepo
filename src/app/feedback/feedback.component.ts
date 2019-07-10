import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  name: string;
  comment: string;
  // categories: any[] = [
  //   {
  //     name: "Guest Services/ Staff", detail: [
  //       { subCategory: "Reservation Process", value: 3 },
  //       { subCategory: "Reception staff attitude", value: 3 },
  //       { subCategory: "Overall staff friendliness & helpfulness", value: 3 },
  //       { subCategory: "Quality concierge service", value: 3 },
  //       { subCategory: "Friendliness/ helpfulness of doorman", value: 3 },
  //       { subCategory: "Quality of room service", value: 3 }
  //     ]
  //   },
  //   {
  //     name: "Room Facility", detail: [
  //       { subCategory: "Decor", value: 3 },
  //       { subCategory: "Cleanliness of guest room", value: 3 },
  //       { subCategory: "Free broadband service", value: 3 },
  //       { subCategory: "Interactive TV service", value: 3 },
  //       { subCategory: "Room facilities", value: 3 }
  //     ]
  //   },
  //   {
  //     name: "Restaurants & Bar", detail: [
  //       { subCategory: "Choice and quality of breakfast", value: 3 },
  //       { subCategory: "Staff friendliness", value: 3 },
  //       { subCategory: "Standard of restaurant services", value: 3 },
  //       { subCategory: "Quality range and variety of food", value: 3 },
  //       { subCategory: "Friendliness/ helpfulness of doorman", value: 3 },
  //       { subCategory: "Quality range and variety of beverages", value: 3 }
  //     ]
  //   },
  //   {
  //     name: "Spa & Wellness", detail: [
  //       { subCategory: "Range of facilities", value: 3 },
  //       { subCategory: "Friendliness of staff", value: 3 },
  //       { subCategory: "Cleanliness", value: 3 }
  //     ]
  //   },
  //   {
  //     name: "Hotel in General", detail: [
  //       { subCategory: "Overall condition/ appearance of hotel", value: 3 },
  //       { subCategory: "How well were your expectation exceeded?", value: 3 }
  //     ]
  //   }

  // ]
  categories: any[] = [
    { name: "Food-Quality", value: 0 },

    {
      name: "Service", value: 0
    },
    { name: "Atmosphere", value: 0 },

    { name: "Cleanliness", value: 0 },

    { name: "Value for Money", value: 0 },

    { name: "Overall", value: 0 }
  ]
  constructor() { }


  ngOnInit() {
    if (sessionStorage.getItem('data')) {
      alert("You have saved data");
      this.categories = JSON.parse(sessionStorage.getItem('data'));
    } else {
      sessionStorage.setItem('data', JSON.stringify(this.categories));
    }

  }
  handleValueChange(index, event) {
    this.categories[index].value = event;
    sessionStorage.setItem('data', JSON.stringify(this.categories));
  }


}
