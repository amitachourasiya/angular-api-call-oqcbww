import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any;
  private cardData: any = [];
  private addData: any = [];
  private shipData: any = [];
  showModal: boolean;
  UserId: string;
  Firstname: string;
  Date: string;
  Email: string;
  closeResult: string;
  lenght: Number;
  shipDataLength: Number;
  FirstResonse: any = {};
  secondResponse: any = {};
  thirdResponse: any = {};
  result: Number = 0;
  API_URL = 'https://run.mocky.io/v3/e69d7493-4a48-4fb6-8b06-fa922abb0b1f';
  API_URL_second =
    'https://run.mocky.io/v3/821b16ec-0814-40a2-8e8b-1be41e8d0c43';
  API_URL_Third =
    'https://run.mocky.io/v3/ef77a3c6-63f8-4fcc-b386-9cff523a4c41';

  constructor(
    private api: ApiService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const apiFirst = this.http.get(this.API_URL);
    const apiSecond = this.http.get(this.API_URL_second);
    const apiThird = this.http.get(this.API_URL_Third);
    //Subscribing using forkJoin
    forkJoin([apiFirst, apiSecond, apiThird]).subscribe((result) => {
      this.FirstResonse = result[0];
      this.secondResponse = result[1];
      this.thirdResponse = result[2];

      this.FirstResonse.forEach((data) => {
        this.cardData.push(data);
        this.lenght = this.cardData.length;
      });
      this.secondResponse.forEach((data1) => {
        this.result += data1.Amount;
        this.addData.push(data1);
      });
      this.thirdResponse.forEach((data2) => {
        this.shipData.push(data2);
        console.log(data2);
        this.shipDataLength = this.cardData.length;
      });
      // this.result = this.cardData.filter((o1) =>
      //   this.AddData.filter((o2) => (o1.Name === o2.Name ? 'data' : ''))
      // );
      // this.AddData = this.secondResponse.filter((data) => {
      //   console.log( data.Name);
      //   console.log( this.cardData);
      //   if (data.Name == this.cardData.Name) {
      //     console.log('inside', data.Name);
      //     return data.Address;
      //   }
      // });
    });
  }
  open(content, Name, DateNew) {
    this.Firstname = Name;
    this.Date = DateNew;
    this.showModal = true;
    this.modalService
      .open(content, { ariaLabelledBy: 'mymodal' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
    this.modalService.dismissAll();
  }
}
