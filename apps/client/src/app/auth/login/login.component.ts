import { Component } from '@angular/core';
import { CreateUserInput } from '../../../generated-types';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private readonly loginService: LoginService){}

  login(createUserData: CreateUserInput){
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.loginService.login(createUserData).subscribe(() => {})
  }
}
