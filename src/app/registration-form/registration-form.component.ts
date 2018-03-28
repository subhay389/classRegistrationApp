import { Component, OnInit } from '@angular/core';
import { RegistrationFormService } from '../registration-form.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: any;

  constructor(private registrationFormService: RegistrationFormService) { }

  ngOnInit() {
    this.getRegistrationFormList();
  }
  
  getRegistrationFormList() {
    this.registrationFormService.getAllRegistrationForm().then((res) => {
      this.registrationForm = res;
      console.log(this.registrationForm);
    }, (err) => {
      console.log(err);
    });
  }

}
