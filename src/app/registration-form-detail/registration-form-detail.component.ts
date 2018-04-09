import { Component, OnInit } from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';
import { RegistrationFormService } from '../registration-form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form-detail',
  templateUrl: './registration-form-detail.component.html',
  styleUrls: ['./registration-form-detail.component.css']
})

@Pipe({name: 'keys'})

export class RegistrationFormDetailComponent implements OnInit, PipeTransform {

  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }

  registrationForm = {};
  all_crns = {};
  crn_array = [];
  my_crns = {};
  courses = [];
  uid: any;

  constructor(private route: ActivatedRoute, private router: Router, private registrationFormService: RegistrationFormService) { }

  ngOnInit() {
    this.getRegistrationFormDetail(this.route.snapshot.params['id']);
  }

  getRegistrationFormDetail(id) {
    this.registrationFormService.showRegistrationForm(id).then((res) => {
      this.registrationForm = res;
      this.registrationFormService.getCRN().then((res) => {
        this.all_crns = res[0];
        this.crn_array = this.registrationForm["crns"];
        console.log(this.crn_array);
        var i = 0;
        for (i = 0; i < this.crn_array.length; i++) { 
          if (this.crn_array[i] in this.all_crns){
            this.my_crns[this.crn_array[i]] = this.all_crns[this.crn_array[i]]
            this.courses.push(this.all_crns[this.crn_array[i]]);
          }
        }
        console.log(typeof this.all_crns);
        console.log(typeof this.my_crns);
        console.log(this.all_crns);
        console.log(this.my_crns);
        var myJSON1 = JSON.stringify(this.all_crns);
        var myJSON2 = JSON.stringify(this.my_crns);
        this.all_crns = JSON.parse(myJSON1);
        this.my_crns = JSON.parse(myJSON2);
        console.log(myJSON1);
        console.log(myJSON2);
        console.log(typeof this.all_crns === typeof this.my_crns);
      }, (err) => {
        console.log(err);
      });
      this.uid = this.registrationForm['uid'];
    }, (err) => {
      console.log(err);
    });
  }
  // get all() {return JSON.stringify(this.all_crns)}
  // get my() {return JSON.stringify(this.all_crns)}

  
  deleteRegistrationForm(id) {
    console.log(id)
    this.registrationFormService.deleteRegistrationForm(id).then((result) => {
      this.router.navigate(['/registration-form', this.uid]);
    }, (err) => {
      console.log(err);
    });
  }       

}