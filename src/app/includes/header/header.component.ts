import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private design:DesignUtilityService) { }
  exclusive: boolean = false;
  ngOnInit(): void {
    this.design.exclusive.subscribe(res=>{
      this.exclusive=res
    })
  }

}
