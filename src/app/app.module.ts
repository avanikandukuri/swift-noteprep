import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiftComponent } from './swift/swift.component';
import { SwiftService } from './swift/swift.service';

@NgModule({
  declarations: [
    AppComponent,
    SwiftComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
    AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
  ],
  providers: [
		{ provide: 'LOCALSTORAGE', useValue: window.localStorage },
		SwiftService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
