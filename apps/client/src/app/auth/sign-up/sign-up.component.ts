import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signUp({ email, password }: any){
    console.log(email, password);
  }
}
