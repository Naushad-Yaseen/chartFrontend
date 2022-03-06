import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-c',
  templateUrl: './bar-c.component.html',
  styleUrls: ['./bar-c.component.css']
})
export class BarCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saleData = [
    {name:"Nokia", value: 105000 },
    {name:"Dell",  value: 55000 },
    {name:"LG", value: 15000 },
    {name:"vivo",  value: 150000 },
    {name:"vi", value: 20000 }
  ];

}
