import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login({ email, password }: any){
    console.log(email, password);
  }
}
