import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { AppelementComponent } from "./appelement/appelement.component";
import { AnothereleComponent } from "./anotherele/anotherele.component";
import { AppRoutingModule } from './routes/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [AppelementComponent, AnothereleComponent],
  imports: [BrowserModule, AppRoutingModule],
  entryComponents: [AppelementComponent, AnothereleComponent],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(AppelementComponent, {
      injector: this.injector
    });

    const e2 = createCustomElement(AnothereleComponent, {
      injector: this.injector
    });

    customElements.define("app-element", el);
    customElements.define("another-ele", e2);

    
  }
}
