import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestcompComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  comp1Click() {
    console.log('Button click for Comp1 .... ');
    this.router.navigate(['', { outlets: { namedOutlet: 'test1' } }]);
  }

  comp2Click() {
    console.log('Button click for Comp2 .... ');
    this.router.navigate(['', { outlets: { namedOutlet: 'test' } }]);
  }

}
