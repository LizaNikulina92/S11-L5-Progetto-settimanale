import { Component, OnInit } from '@angular/core';
import { AutService } from 'src/app/auth/aut.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myname = "Epicode App"

  constructor(private autService: AutService) {
    this.autService.autSubject.subscribe(val => {
      if (val !== null){
        this.myname = `Epicode App  | Ciao, ${val?.user.firstname}`;
      } else {
        this.myname = 'Epicode App'
      }
    })
   }

  ngOnInit(): void {
  }

}
