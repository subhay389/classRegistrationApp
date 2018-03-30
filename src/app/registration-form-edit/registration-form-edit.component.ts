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
    console.log(id);
    this.registrationFormService.showRegistrationForm(id).then((res) => {
      this.registrationForm = res;
      console.log(this.registrationForm);
    }, (err) => {
      console.log(err);
    });
  }
  updateRegistrationForm(id) {
    console.log("edit update -------")
    console.log(id);
    this.registrationFormService.updateRegistrationForm(id, this.registrationForm).then((result) => {
      console.log(result);
      let newid = result['_id'];
      console.log('**********');
      console.log(newid);
      //this.router.navigate(['/registration-form-detail', newid]);
      console.log('edit update finish------')
    }, (err) => {
      console.log(err);
    });
  }


}
