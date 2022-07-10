import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AutService } from '../auth/aut.service';
import { IAutData } from '../auth/interfaces/iaut-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactComponent implements OnInit {

  panelOpenState = false;
  users: any | IAutData[] = [];

  constructor(private autService: AutService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server')
    this.autService.autSubject.subscribe(userLogin => {
      this.http.get<IAutData[]>('http://localhost:4201/users', {
        headers: new HttpHeaders({ "Authorization": "Bearer " + userLogin?.accessToken})})
        .subscribe(
          resp => {
            console.log(resp);
            this.users =  resp;
          },
        )
    })
  }

}
