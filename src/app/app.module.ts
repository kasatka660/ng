import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldListComponent } from './hello-world-list/hello-world-list.component';
import { List2Component } from './list2/list2.component';
import { CounterComponent } from './counter/counter.component';
import { CounterHostComponent } from './counter-host/counter-host.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldListComponent,
    List2Component,
    CounterComponent,
    CounterHostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'list1', component: HelloWorldListComponent },
      { path: 'list2', component: List2Component },
      { path: 'counter', component: CounterHostComponent },
      { path: '', redirectTo: 'list1', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
