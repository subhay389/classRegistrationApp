import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { resolve, reject } from 'q';

@Injectable()
export class RegistrationFormService {

  constructor(private http: Http) { }

  saveUser(data){
    return new Promise((resolve, reject) => {
      this.http.post('/registrationForm/saveUser', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getUser(id){
    console.log('Inside service getUser()')
    return new Promise((resolve, reject) => {
      this.http.get('/registrationForm/getUser/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  login(){
    console.log('Inside service login()')
    return new Promise((resolve, reject) => {
      this.http.get('/registrationForm/auth/google')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
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

  getAllRegistrationForm(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/registrationForm/allForm/' + id)
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
        this.http.get('/registrationForm/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
            console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getCRN() {
    return new Promise((resolve, reject) => {
      this.http.get('/registrationForm/')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  getAllAdvisor(id) {
    
    console.log("Inside serviece getAllAdvisor()")
    return new Promise((resolve, reject) => {
      this.http.get('/registrationForm/getAllAdvisor/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  getOneAdvisor(id) {
    console.log("Inside serviece getAllAdvisor()")
    return new Promise((resolve, reject) => {
      this.http.get('/registrationForm/getOneAdvisor/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }


  updateRegistrationForm(id, data) {
    return new Promise((resolve, reject) => {
      console.log("inside service update form")
        this.http.put('/registrationForm/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
          console.log("inside service update form finish")
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
