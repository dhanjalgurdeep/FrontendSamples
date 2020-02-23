import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AnothereleComponent } from '../anotherele/anotherele.component';

const appRoutes: Routes = [
	{ path: 'test', outlet: "namedOutlet", component:AnothereleComponent , data: { class: "" }}
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {
	})],
	exports:[RouterModule]
})
export class AppRoutingModule {
	
}