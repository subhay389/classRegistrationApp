import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationFormService {

  constructor(private http: Http) { }

  getAllRegistrationForm() {
    console.log("inside service getForm");
    return new Promise((resolve, reject) => {
      this.http.get('/registrationForm')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showRegistrationForm(id) {
    return new Promise((resolve, reject) => {
        console.log("inside service get form by id")
        this.http.get('/registrationForm/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveRegistrationForm(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/registrationForm', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateRegistrationForm(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/registrationForm/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteRegistrationForm(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/registrationForm/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
