import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationFormService } from '../registration-form.service';


@Component({
  selector: 'app-registration-form-edit',
  templateUrl: './registration-form-edit.component.html',
  styleUrls: ['./registration-form-edit.component.css']
})
export class RegistrationFormEditComponent implements OnInit {

  registrationForm = {};

  constructor(private registrationFormService: RegistrationFormService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRegistrationForm(this.route.snapshot.params['id']);
  }

  getRegistrationForm(id) {
    this.registrationFormService.showRegistrationForm(id).then((res) => {
      this.registrationForm = res;
      console.log("--------edit----------")
      console.log(this.registrationForm);
    }, (err) => {
      console.log(err);
    });
  }

  updateRegistrationForm(id) {
    this.registrationFormService.updateRegistrationForm(id, this.registrationForm).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/registration-form-details', id]);
    }, (err) => {
      console.log(err);
    });
  }


}
