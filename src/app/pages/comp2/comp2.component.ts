import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  name: string;
  // name: string='anup';
  constructor(private service: DesignUtilityService) { }

  ngOnInit(): void {
    this.service.username.subscribe(res => {
      this.name = res;
    })
  }
  onChange2(a: any) {
    console.log('a', a.value);
    this.service.username.next(a.value)

  }
}
