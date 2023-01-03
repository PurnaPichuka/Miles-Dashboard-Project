import { Component, Input, OnInit } from '@angular/core';
import { MilesServiceService } from '../miles-service.service';
import { Data } from '../models/Data';
import "@lottiefiles/lottie-player";

@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.scss']
})
export class MainPartComponent implements OnInit {

  @Input() showModal!:boolean;
  @Input() arrow!:boolean;
  
  data:Data|any

  constructor(private ms: MilesServiceService) {}

  ngOnInit(): void {
    this.ms.getService().subscribe(c=>this.data=c)
  }

  //  Linga
anytext:boolean|any
anytextmiles:boolean|any
anytextmilesone:boolean|any

anytextmilestwo:boolean|any
anytextmilesthree:boolean|any
anytextmilesfour:boolean|any
anytext2:boolean|any

anytext3:boolean|any

anytext4:boolean|any


checkedone=false
checkedtwo=false
checkedthree=false
checkedfour=false

checkone(event:any)
{
 if(event.target.checked)
  {
  this.checkedone=true;
  }
  else
  {
    this.checkedone=false;
  }
}

checktwo(event:any)
{
 if(event.target.checked)
  {
  this.checkedtwo=true;
  }
  else
  {
    this.checkedtwo=false;
  }
}

checkthree(event:any)
{
 if(event.target.checked)
  {
  this.checkedthree=true;
  }
  else
  {
    this.checkedthree=false;
  }
}

checkfour(event:any)
{
 if(event.target.checked)
  {
  this.checkedfour=true;
  }
  else
  {
    this.checkedfour=false;
  }
}

}
