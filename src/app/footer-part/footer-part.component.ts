import { Component, Input, OnInit } from '@angular/core';
import "@lottiefiles/lottie-player";

@Component({
  selector: 'app-footer-part',
  templateUrl: './footer-part.component.html',
  styleUrls: ['./footer-part.component.scss']
})
export class FooterPartComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  @Input() showModal!:boolean;
  @Input() arrow!:boolean;

}
