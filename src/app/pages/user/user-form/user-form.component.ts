import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../models/User';
import {UsersService} from '../../../services/users';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  user: UserModel;
  updating: boolean;
  password: string;
  confirm: string;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {
    this.user = {} as UserModel;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.updating = !!params['id']) {
        this.loadUser(params['id']);
      }
    });
  }

  loadUser(id: string) {
    this.userService.find(id).subscribe(
      (user) => { this.user = user; },
      (err) => { console.log(err); }
    );
  }

  save() {
    if (this.password && this.password === this.confirm) {
      this.user.password = this.password;
    }

    if (this.updating) {
      this.userService.update(this.user).subscribe(
        () => { this.router.navigate(['/user/list']); },
        () => {}
      );
    } else {
      if (this.user.password) {
        this.userService.create(this.user).subscribe(
          () => { this.router.navigate(['/user/list']); },
          () => {}
        );
      }
    }
  }

}
