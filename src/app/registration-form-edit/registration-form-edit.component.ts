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
  advisor: any;
  
  constructor(private registrationFormService: RegistrationFormService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRegistrationForm(this.route.snapshot.params['id']);
  }

  getRegistrationForm(id) {
    console.log(id);
    this.registrationFormService.showRegistrationForm(id).then((res) => {
      this.registrationForm = res;
      this.getOneAdvisor(this.registrationForm['advisor']);
    }, (err) => {
      console.log(err);
    });
  }

  updateRegistrationForm(id) {
    
    var newRegistrationForm = {
      uid: this.registrationForm['uid'],
      studentId: this.registrationForm["studentId"],
      name: this.registrationForm["name"],
      degree: this.registrationForm["degree"],
      email: this.registrationForm["email"],
      advisor: this.registrationForm["advisor"],
      term: this.registrationForm["term"],
      crns: ((this.registrationForm["crns"])+ "").split(","),
      isApproved: this.registrationForm["isApproved"],
      updated_at: Date.now,
      pin: this.registrationForm['pin'],
      reason: this.registrationForm['reason']
    }
    this.registrationFormService.updateRegistrationForm(id, newRegistrationForm).then((result) => {
      this.router.navigate(['/registration-form-detail', id]);
    }, (err) => {
      console.log(err);
    });
  }

  getOneAdvisor(advisorid){
    this.registrationFormService.getOneAdvisor(advisorid).then((result) => {
      console.log("This Advisor")
      console.log(advisorid)
      console.log(result)
      console.log(this.registrationForm["advisor"])
      console.log(result[0]["name"])
      //this.registrationForm["advisor"] = result[0]["name"]
      this.advisor = result[0]["name"];
    }, (err) => {
      console.log(err);
    });
  }



}
