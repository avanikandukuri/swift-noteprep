import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiftComponent } from './swift/swift.component';

const routes: Routes = [
	{
		path: 'swifts',
		component: SwiftComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
