import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isRedirected: boolean;

  constructor(private router: Router) {
    this.isRedirected = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRedirected = event.url !== '/' && event.url !== '/master-data' && event.url !== '/training-material' ? true : false;
      }
    });
  }

  ngOnInit(): void {}
}
