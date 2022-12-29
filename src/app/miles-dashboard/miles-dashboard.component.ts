import { Component, OnInit } from '@angular/core';
import { MilesServiceService } from '../miles-service.service';
import { Data } from '../models/Data';
import { Data1 } from '../models/Data1';
// import { HttpClient } from '@angular/common/http';
import "@lottiefiles/lottie-player";


@Component({
  selector: 'app-miles-dashboard',
  templateUrl: './miles-dashboard.component.html',
  styleUrls: ['./miles-dashboard.component.scss']
})
export class MilesDashboardComponent implements OnInit {
  data:Data|any
  data1:Data1|any

  // constructor() {}
  constructor(private ms: MilesServiceService) {}

  ngOnInit(): void {
    this.ms.getService().subscribe(c=>this.data=c)
    this.ms.getNotice().subscribe(c=>this.data1=c)
  }

  //Poorna
  public content_1_color:boolean = true;
  public content_2_color:boolean = false;
  public content_3_color:boolean = false;
  public content_4_color:boolean = false;
  public showData1:boolean=true;
  public showData2:boolean=false;
  public showData3:boolean=false;
  public showData4:boolean=false;

  content1(){
    this.showData1 = true;
    this.showData2 = false;
    this.showData3 = false;
    this.showData4 = false;
    // alert("content1");
    this.content_1_color = true;
    this.content_2_color = false;
    this.content_3_color = false;
    this.content_4_color = false;
  }
  content2(){
    this.showData1 = false;
    this.showData2 = true;
    this.showData3 = false;
    this.showData4 = false;
    // alert("content2")
    this.content_1_color = false;
    this.content_2_color = true;
    this.content_3_color = false;
    this.content_4_color = false;
  }
  content3(){
    this.showData1 = false;
    this.showData2 = false;
    this.showData3 = true;
    this.showData4 = false;
    // alert("content3")
    this.content_1_color = false;
    this.content_2_color = false;
    this.content_3_color = true;
    this.content_4_color = false;
  }
  content4(){
    this.showData1 = false;
    this.showData2 = false;
    this.showData3 = false;
    this.showData4 = true;
    // alert("content3")
    this.content_1_color = false;
    this.content_2_color = false;
    this.content_3_color = false;
    this.content_4_color = true;
  }


  public show:boolean = false;
  public showModal:boolean = false;
  public arrow:boolean = false;

  public group = {
    "section" : true
  }
  
  lytSwitch(){
    this.show = !this.show;
  }

  popUp(){
    this.showModal = !this.showModal
    
  }

  close() {
    this.showModal = false;
  }
  clickedOutside(){
    this.showModal = false;
    this.arrow = false;
  }

  guide(){
    this.arrow = !this.arrow
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
