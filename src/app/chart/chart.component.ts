import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
//var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Feedback Data"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 4, label: "Food Quality" },
          { y: 4.5, label: "Service" },
          { y: 3, label: "Atmosphere" },
          { y: 4.2, label: "Cleanliness" },
          { y: 3, label: "Value for money" },
          { y: 3, label: "Overall" }

        ]
      }]
    });

    chart.render();
  }
}