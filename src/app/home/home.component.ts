import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit() {
  }
  signin(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (data) => {
        console.log("object", data);
        localStorage.setItem("auth", JSON.stringify(data))
        this.router.navigateByUrl('/dashboard').then();
      }
    )

  }
  fbLogin() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (data) => {
        console.log("fb object", data);
        localStorage.setItem("auth", JSON.stringify(data))
        this.router.navigateByUrl('/dashboard').then();
      }
    )
  }
  submit() {
    console.log("Submit");
  }

}
