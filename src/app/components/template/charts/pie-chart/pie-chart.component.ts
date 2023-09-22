import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();    
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'pie',

      data: {
        labels: ['Red', 'Pink', 'Green', 'Yellow', 'Orange', 'Blue', ],
        datasets: [{
            label: 'My First dataset', 
            data: [300, 240, 100, 432, 253, 34],
            backgroundColor: [
              'red',
              'pink',
              'green',
              'yellow',
              'orange',
              'blue',
            ],
            hoverOffset: 4
          }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
