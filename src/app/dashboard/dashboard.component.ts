import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDetails: any;

  constructor(private router: Router) { }

  ngOnInit() {
    const storage = localStorage.getItem("auth");

    if (storage) {
      this.userDetails = JSON.parse(storage)
      console.log("darf", this.userDetails);
    }
  }

  logout() {
    localStorage.removeItem('auth')
    this.router.navigateByUrl('login').then();

  }

}
