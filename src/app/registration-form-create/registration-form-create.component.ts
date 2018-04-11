import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationFormService } from '../registration-form.service';

@Component({
  selector: 'app-registration-form-create',
  templateUrl: './registration-form-create.component.html',
  styleUrls: ['./registration-form-create.component.css']
})
export class RegistrationFormCreateComponent implements OnInit {

  selectedAdvisor: any;
  user: any;
  advisors: any;
  uid: any;
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

  constructor(private registratoinFormService: RegistrationFormService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getUid(this.route.snapshot.params['id']);
    this.getUserInfo(this.uid)
    this.getAllAdvisor();
  }

  getUid(id){
    this.uid = id;
  }

  getUserInfo(uid){
    console.log(uid);
    this.registratoinFormService.getUser(uid).then((result) => {
      let user = result;
      this.name = user[0].name;
      this.email = user[0].email;
      //console.log(user[0].name);
    }, (err) => {
      console.log(err);
    });;
  }

  saveRegistrationForm() {

    var newForm = {
      uid: this.uid,
      studentId: this.studentId,
      name: this.name,
      degree: this.degree,
      email: this.email,
      advisor: this.selectedAdvisor,
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

  getAllAdvisor(){
    this.registratoinFormService.getAllAdvisor(0).then((result) => {
      console.log(result)
      this.advisors = result;
    }, (err) => {
      console.log(err);
    });
  }

}