import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RegistrationFormService } from './registration-form.service';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationFormCreateComponent } from './registration-form-create/registration-form-create.component';
import { RegistrationFormDetailComponent } from './registration-form-detail/registration-form-detail.component';

const ROUTES = [
  { path: '', redirectTo: 'registrationForm', pathMatch: 'full' },
  { path: 'registrationForm', component: RegistrationFormComponent },
  { path: 'registration-form-detail/:id', component: RegistrationFormDetailComponent },
  { path: 'registration-form-create', component: RegistrationFormCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    RegistrationFormCreateComponent,
    RegistrationFormDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RegistrationFormService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
