import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = faCalculator;
  title = 'Macro Calculator';
  addUser = () => this.userService.showUserForm();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }


}
