import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutService } from '../aut.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;

  email = new FormControl('', [Validators.required, Validators.email]);
  value = new FormControl('', [Validators.required, Validators.required]);

  constructor(private autService: AutService, private router: Router) { }

  ngOnInit(): void {
    this.autService.autSubject.subscribe(val => console.log(val?.user))
  }

/*   onSubmit() { */
    /* console.log(this.form.value); */
/*     this.autService */
/*       .login(this.form.value)
      .subscribe(resp => {
        console.log(resp);
        this.error = undefined; */
      /*   this.router.navigate(['']); */

/*       },
      err => {
        console.log(err.error);
        this.error =err.error;
      }
        );
  } */

  onSubmit() {
    console.log(this.form.value);
    this.autService.login(this.form.value).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['/home']);
      },
      err  => {
        console.log(err.error);
        this.error = err.error;
      }
    )
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessageValue() {
    return this.value.hasError('required') ? 'You must enter a value' :
            '';
  }


}
