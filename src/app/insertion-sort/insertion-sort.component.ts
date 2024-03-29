import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {

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
    {data: this.arrayToSory, label: 'Value'},
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

  insertionSort(){
    //insertion sort algorithm
    let temp;
    for(let i = 1; i < this.arrayToSory.length; i++){
      for(let j = i; j > 0; j--){
        if(this.arrayToSory[j] < this.arrayToSory[j-1]){
          temp = this.arrayToSory[j];
          this.arrayToSory[j] = this.arrayToSory[j-1];
          this.arrayToSory[j-1] = temp;
        }
      }
    }

     //update barChartData with new data
     this.barChartData = [
      {data: this.arrayToSory, label: 'Series A'},
    ];

  }


}
