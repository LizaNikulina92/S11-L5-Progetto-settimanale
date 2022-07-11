import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AutService } from 'src/app/auth/aut.service';
import { IAutData } from 'src/app/auth/interfaces/iaut-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  users: any | IAutData[] = [];
  error = undefined;
  opened = false;

  userNameValue: string ='';
  userSurnameValue: string ='';
  userEmailValue: string ='';

  constructor(private autService: AutService, private http: HttpClient) {
    this.autService.autSubject.subscribe(val => {
      if (val !== null){
        this.userNameValue = val?.user.firstname;
        this.userSurnameValue = val?.user.lastname;
        this.userEmailValue = val?.user.email;
      }
    })

   }


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
          err => {
            console.log(err)
            this.error = err.error
          }
        )
    })
  }

  userPageValue(i:IAutData[] | any){
    this.userNameValue = i.firstname;
    this.userSurnameValue = i.lastname;
    this.userEmailValue = i.email;
  }

}
