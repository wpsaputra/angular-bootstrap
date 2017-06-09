import { UserService } from './../../services/user.service';
import { User } from './../../classes/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[];
  title = 'List Users';


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();

  }

  getUsers(): void {
        this.userService.getUsers()
            .subscribe(
                users => {
                    this.users = users;
                    console.log('this.users=' + this.users);
                    console.log('this.users.length=' + this.users.length);
                    console.log('this.users[0].firstName=' + this.users[0].firstName);
                }, //Bind to view
                            err => {
                        // Log errors if any
                        console.log(err);
                    })
    }

}