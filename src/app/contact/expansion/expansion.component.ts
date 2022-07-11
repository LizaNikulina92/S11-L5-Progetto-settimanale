import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AutService } from 'src/app/auth/aut.service';
import { IAutData } from 'src/app/auth/interfaces/iaut-data';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent implements OnInit {

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
