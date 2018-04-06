import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegistrationFormService } from '../registration-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "angular2-social-login";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  sub: any;
  public data ; 
  public loggedIn = false;

  constructor(public _auth: AuthService, private router: Router, private registrationFormService: RegistrationFormService){ }
  
  ngOnInit(){
    
  }

  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (info) => {
                  this.data = info;
                  //user data 
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
                  this.saveUser()
                }
    )

  }

  saveUser(){
    var newForm = {
      name: this.data.name,
      image: this.data.image,
      uid: this.data.uid,
      provider: this.data.provider,
      email: this.data.email,
      token: this.data.token,
    }
    console.log(newForm);
    this.loggedIn = true;
    this.registrationFormService.saveUser(newForm).then((res) => {
      this.loggedIn = true;
      this.router.navigate(['/registration-form', this.data.uid]);
    }, (err) => {
      console.log(err);
    });

  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.data=null;}
    )
    this.loggedIn = false;
    //this.router.navigate(['/']);
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
    
  }

}
