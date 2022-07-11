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

  constructor() { }

  ngOnInit(): void {
  }


}
