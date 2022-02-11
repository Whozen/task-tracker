import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { ButtonsComponent } from './componenets/buttons/buttons.component';
import { TasksComponent } from './componenets/tasks/tasks.component';
import { TaskItemComponent } from './componenets/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    TasksComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
