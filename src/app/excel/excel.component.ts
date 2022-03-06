import { Component, OnInit } from '@angular/core';
// import { ExcelService } from '../appServices/excel.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  data: (string | number)[][];

  constructor() {
    this.data = [
      [2019, 1, '50', '20', '25', '20'],
      [2019, 2, '80', '20', '25', '20'],
      [2019, 3, '120', '20', '25', '20'],
      [2019, 4, '75', '20', '25', '20'],
      [2019, 5, '60', '20', '25', '20'],
      [2019, 6, '80', '20', '25', '20'],
      [2019, 7, '95', '20', '25', '20'],
      [2019, 8, '55', '20', '25', '20'],
      [2019, 9, '45', '20', '25', '20'],
      [2019, 10, '80', '20', '25', '20'],
      [2019, 11, '90', '20', '25', '20'],
      [2019, 12, '110', '20', '25', '20'],
    ];
   }

  ngOnInit(): void {
  }
  generateExcel() {

    // console.log('called');
    //  this.excelService.generateExcel();
   }
}
