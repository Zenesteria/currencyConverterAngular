import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  public chart: any;
  @Input({required:true}) historySet!:number[]
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Rates',
            data: [
              1.4196, 4.0003, 1.324, 0.9744, 6.3559, 6.6601, 0.8929, 0.6595,
              7.75, 65.57, 119.58, 118,
            ],
            // data: this.historySet,
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
