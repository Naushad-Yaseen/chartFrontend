import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userName:string;
  // userName:string='Anup';

  constructor(private design:DesignUtilityService) { }

  ngOnInit(): void {
  this.design.username.subscribe(res=>{
    this.userName=res;
    // console.log('res',res);

  })
    // this.design.exclusive.next(true);
  }

}
