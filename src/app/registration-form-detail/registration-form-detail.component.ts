import { Component, OnInit } from '@angular/core';
import { RegistrationFormService } from '../registration-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form-detail',
  templateUrl: './registration-form-detail.component.html',
  styleUrls: ['./registration-form-detail.component.css']
})

export class RegistrationFormDetailComponent implements OnInit {

  registrationForm = {};
  uid: any;

  constructor(private route: ActivatedRoute, private router: Router, private registrationFormService: RegistrationFormService) { }

  ngOnInit() {
    this.getRegistrationFormDetail(this.route.snapshot.params['id']);
  }

  getRegistrationFormDetail(id) {
    console.log(id);
    this.registrationFormService.showRegistrationForm(id).then((res) => {
      this.registrationForm = res;
      this.uid = this.registrationForm['uid'];
      console.log(this.registrationForm);
    }, (err) => {
      console.log(err);
    });
  }
  
  deleteRegistrationForm(id) {
    console.log(id)
    this.registrationFormService.deleteRegistrationForm(id).then((result) => {
      this.router.navigate(['/registration-form', this.uid]);
    }, (err) => {
      console.log(err);
    });
  }       

}