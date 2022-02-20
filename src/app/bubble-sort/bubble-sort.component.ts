import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';


@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {
  
  arrayToSory = [1,2,3,4,5];

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['0', '1', '2', '3', '4'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.arrayToSory, label: 'Series A'},
  ];
  ngOnInit(): void {
   

  }

  


  generateRandomNumbers(){
    //generate 5 random numbers and push to arrayToSory
    this.arrayToSory = [];
    for(let i = 0; i < 5; i++){
      this.arrayToSory.push(Math.floor(Math.random() * 10));
      
    }

    //update barChartData with new data
    this.barChartData = [
      {data: this.arrayToSory, label: 'Series A'},
    ];

    console.log(this.arrayToSory);
    
  }

}
