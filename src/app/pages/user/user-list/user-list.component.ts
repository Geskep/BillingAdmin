import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/User';
import {UsersService} from '../../../services/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users: UserModel[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = [];
    this.usersService.get().subscribe(
      (users) => { this.users = users; },
      (err) => { console.log(err); }
    );
  }

}
