import { Component, OnInit } from '@angular/core';
import { RegistrationFormService } from '../registration-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  uid: any;
  registrationForm: any;

  constructor(private route: ActivatedRoute, private router: Router, private registrationFormService: RegistrationFormService) { }

  ngOnInit() {
    this.getRegistrationFormList();

    this.getLoginId(this.route.snapshot.params['id']);
  }
  getLoginId(id){
    this.uid = id;
  }

  nagivageDetailsPage(formID){
    console.log("form id: " + formID)
    this.router.navigate(['/registration-form-detail', formID]);
  }

  navigateCreatePage(){
    
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
