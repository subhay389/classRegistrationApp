import { Component, OnDestroy } from '@angular/core';
import { RegistrationFormService } from '../registration-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {

  // constructor(private route: ActivatedRoute, private router: Router, private registrationFormService: RegistrationFormService) { }

  // ngOnInit() {
  // }
  
  // login(){
  //   console.log("LOGIN");
  //   this.registrationFormService.login().then((res) => {
  //     console.log(res);
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  public user;
  sub: any;
  data: any;

  constructor(public _auth: AuthService, private router: Router){ }
  
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                  //console.log(data);
                  this.data = data;
                  //user data 
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
                }
    
    )
    console.log(this.data.uid);
    this.router.navigate(['/registration-form', this.data.uid]);
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
    this.router.navigate(['/']);
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
