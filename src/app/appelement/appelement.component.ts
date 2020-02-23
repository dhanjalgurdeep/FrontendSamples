import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-element",
  templateUrl: "./appelement.component.html",
  styleUrls: ["./appelement.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class AppelementComponent implements OnInit {
  @Input() testparam = '';
  constructor() {
    console.log('inside the construsctor')
  }

  ngOnInit() {
    console.log('test param : ', this.testparam);
  }
}
