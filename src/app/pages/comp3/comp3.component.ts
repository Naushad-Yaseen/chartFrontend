import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  name: string;
  // name: string='anup';

  constructor(private service: DesignUtilityService) { }

  ngOnInit(): void {
    this.service.username.subscribe(res => {
      this.name = res;
    })
  }
  onChange3(b3:any){
    console.log('a', b3.value);
    this.service.username.next(b3.value)
  }
}
