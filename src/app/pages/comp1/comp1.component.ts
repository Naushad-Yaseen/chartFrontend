import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  name: string;
  // name: string='anup';

  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {
    this.design.username.subscribe(res=>{
       this.name=res;
      console.log('res',res);

    })

    // this.design.username.next()
  }
  onChange(uname:any)
  {
    this.design.username.next(uname.value)
console.log(uname.value);

  }
}
