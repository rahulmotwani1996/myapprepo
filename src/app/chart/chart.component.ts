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
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 4, label: "Apple" },
          { y: 4.5, label: "Mango" },
          { y: 3, label: "Orange" },
          { y: 4.2, label: "Banana" },
          { y: 3, label: "Pineapple" },

        ]
      }]
    });

    chart.render();
  }
}