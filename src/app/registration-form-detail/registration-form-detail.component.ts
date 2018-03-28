import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationFormService } from '../registration-form.service';

@Component({
  selector: 'app-registration-form-detail',
  templateUrl: './registration-form-detail.component.html',
  styleUrls: ['./registration-form-detail.component.css']
})

export class RegistrationFormDetailComponent implements OnInit {

  registrationForm = {};

  constructor(private route: ActivatedRoute, private registrationFormService: RegistrationFormService) { }

  ngOnInit() {
    this.getRegistrationFormDetail(this.route.snapshot.params['id']);
  }

  getRegistrationFormDetail(id) {
    console.log(id);
    this.registrationFormService.showRegistrationForm(id).then((res) => {
      this.registrationForm = res;
      console.log(this.registrationForm);
    }, (err) => {
      console.log(err);
    });
  }

}