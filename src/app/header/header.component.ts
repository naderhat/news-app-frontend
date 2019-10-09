import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
