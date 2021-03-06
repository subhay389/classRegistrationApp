import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RegistrationFormService } from './registration-form.service';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { KeysPipe }    from './filter.pipe';
import { MatSelectModule } from '@angular/material/select';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationFormCreateComponent } from './registration-form-create/registration-form-create.component';
import { RegistrationFormDetailComponent } from './registration-form-detail/registration-form-detail.component';
import { RegistrationFormEditComponent } from './registration-form-edit/registration-form-edit.component';
import { LoginPageComponent} from './login-page/login-page.component';

const ROUTES = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'registration-form/:id', component: RegistrationFormComponent },
  { path: 'registration-form-detail/:id', component: RegistrationFormDetailComponent },
  { path: 'registration-form-create/:id', component: RegistrationFormCreateComponent },
  { path: 'registration-form-edit/:id', component: RegistrationFormEditComponent }
];

let providers = {
  "google": {
    "clientId": "517663893817-getosg95ubfp7umt763hcnbeed5n6lkk.apps.googleusercontent.com"
  }
};


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    RegistrationFormCreateComponent,
    RegistrationFormDetailComponent,
    RegistrationFormEditComponent,
    LoginPageComponent,
    KeysPipe
  ],
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    Angular2SocialLoginModule,
    MatNativeDateModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RegistrationFormService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){}
}

Angular2SocialLoginModule.loadProvidersScripts(providers);