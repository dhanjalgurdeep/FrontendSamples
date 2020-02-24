import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "another-ele",
  templateUrl: "./anotherele.component.html",
  styleUrls: ["./anotherele.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AnothereleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
