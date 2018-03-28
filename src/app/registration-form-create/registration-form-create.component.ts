import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationFormService } from '../registration-form.service';

@Component({
  selector: 'app-registration-form-create',
  templateUrl: './registration-form-create.component.html',
  styleUrls: ['./registration-form-create.component.css']
})
export class RegistrationFormCreateComponent implements OnInit {

  registrationForm = {};

  constructor(private registratoinFormService: RegistrationFormService, private router: Router) { }

  ngOnInit() {
  }

  saveRegistrationForm() {
    this.registratoinFormService.saveRegistrationForm(this.registrationForm).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/registration-form-detail', id]);
    }, (err) => {
      console.log(err);
    });
  }

}