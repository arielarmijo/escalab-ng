import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  name = 'Componente B';
  user: any;

  constructor(private usersService: UsersService) {
    this.user = this.usersService.getRandomUser();
   }

  ngOnInit(): void {
  }

  changeUser(): void {
    console.log(this.usersService.getRandomUser());
    this.user = this.usersService.getRandomUser();
  }

}
