import { Component, OnInit } from '@angular/core';
import { AutService } from 'src/app/auth/aut.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private autService: AutService) { }

  ngOnInit(): void {
  }

/*   login(){
    this.autService.login();
  }*/
  logout(){
    this.autService.logout();
  }
}
