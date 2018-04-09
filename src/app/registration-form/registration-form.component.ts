import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RegistrationFormService } from '../registration-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { LoginPageComponent } from '../login-page/login-page.component';

@Injectable()

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit, OnDestroy{

  @ViewChild(LoginPageComponent) loginPageComponent: LoginPageComponent;
  
  //@Input() loginPageComponent: LoginPageComponent;


  uid: any;
  registrationForm: any;

  constructor(private route: ActivatedRoute, private router: Router, private registrationFormService: RegistrationFormService) { }

  ngOnInit() {
    this.getRegistrationFormList(this.route.snapshot.params['id']);

    this.uid = this.route.snapshot.params['id']

    //console.log(this.loginPageComponent.loggedIn);
  }

  // hack(val) {
  //   return Array.from(val);
  // }


  nagivageDetailsPage(formID){
    console.log("form id: " + formID)
    this.router.navigate(['/registration-form-detail', formID]);
  }

  navigateCreatePage(){
    this.router.navigate(['/registration-form-create', this.uid]);
  }

  getRegistrationFormList(id) {
    this.registrationFormService.getAllRegistrationForm(id).then((res) => {
      this.registrationForm = res;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnDestroy(){

  }

  // logout(){
  //   console.log("logout button clicked")
  // }

}
