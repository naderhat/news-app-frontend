import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authServ.logout();
  }
}
