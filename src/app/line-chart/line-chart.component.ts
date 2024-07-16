import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  update=false;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Monthly Average Temperature',
      x: -20 //center
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      x: -20
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      type:'line'
    }, {
      name: 'London',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
      type:'line'
    },
    {
      name: 'TEst',
      data: [10.0, 9.9, 12.5, 17.5, 21.2, 24.5, 28.2, 29.5, 26.3, 21.3, 16.9, 12.6],
      type:'line'
    }
  ],
  plotOptions: {
    series: {
        label: {
            connectorAllowed: false
        },
        pointStart: 2010,
        marker: {
          enabled:false
        }
    }
  }
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateChartData(): void {
    // Assuming new data arrays
    const newDataTokyo =  [6.0, 5.9, 8.5, 13.5, 17.2, 20.5, 24.2, 25.5, 22.3, 17.3, 12.9, 8.6];
console.log(this.chartOptions.series);
// Update the chart data
if (this.chartOptions.series) {
  this.chartOptions.series[1]={
    type:'line',
    data: newDataTokyo
  }


  // To ensure the chart updates properly, create a new reference for the series
  this.chartOptions.series = [...this.chartOptions.series];
  this.update=true;
  console.log(this.chartOptions.series);


}
  }
}
