import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'mc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  showForm = false;


  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.userActions$.subscribe((action: string) => {

      if ( action === 'addUser' ) {
        this.addUser(true);
      } else if ( !!this[action] ) {
        this[action]();
      } else {
        console.log('unknown');
      }
    });
  }

  addUser(bool?: boolean) {
    this.showForm = bool || !this.showForm;
  }

}
