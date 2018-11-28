import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  public $data :any=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rest();
  }

  public rest(){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      data =>{
        this.$data = data;
      }, error => console.log(error)
    )
  }

  /*objectKeys (objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys);
    return keys;
  }*/
}
