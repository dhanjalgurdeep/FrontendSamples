import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AnothereleComponent } from '../anotherele/anotherele.component';
import { TestcompComponent } from '../testcomp/testcomp.component';
import { AppelementComponent } from '../appelement/appelement.component';

const appRoutes: Routes = [	
	{ path:  'testcomp',  component:  TestcompComponent},
	{ path: 'test', outlet: "namedOutlet", component:AnothereleComponent , data: { class: "" }},
	{ path: 'test1', outlet: "namedOutlet", component:AppelementComponent , data: { class: "" }}
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {
	})],
	exports:[RouterModule]
})
export class AppRoutingModule {
	
}