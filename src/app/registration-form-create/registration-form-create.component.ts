import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationFormService } from '../registration-form.service';

@Component({
  selector: 'app-registration-form-create',
  templateUrl: './registration-form-create.component.html',
  styleUrls: ['./registration-form-create.component.css']
})
export class RegistrationFormCreateComponent implements OnInit {

  studentId: string;
  name: string;
  degree: string;
  email: string;
  advisor: string;
  term: string;
  crns: string;
  isApproved: {type: Boolean, default: false};
  pin: {type: String, default: 'Not Approved'};
  updated_at: { type: Date };

  constructor(private registratoinFormService: RegistrationFormService, private router: Router) { }

  ngOnInit() {
  }

  saveRegistrationForm() {

    var newForm = {
      studentId: this.studentId,
      name: this.name,
      degree: this.degree,
      email: this.email,
      advisor: this.advisor,
      term: this.term,
      crns: (this.crns).split(","),
      isApproved: this.isApproved,
      updated_at: Date.now
    }
    console.log(newForm);
    this.registratoinFormService.saveRegistrationForm(newForm).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/registration-form-detail', id]);
    }, (err) => {
      console.log(err);
    });
  }

}