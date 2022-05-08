import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "./servis/http-service.service";
import {Student} from "./Interface/student";
import {newArray} from "@angular/compiler/src/util";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    this.getStudents()
  }

  public listStudents?: Student[];
  student: Student = ({
    name: "Dante",
    surname: "Bionelli",
    email: "DBi@gmail.com",
  });



  constructor(private httpService: HttpServiceService) {
  }



  getStudents(){
    this.httpService.getStudent().subscribe(
      (data: Student []) =>{ this.listStudents = data}
    )
  }

  onClick() {
    console.log("Zarejstrowano");
  this.httpService.addStudent(this.student).subscribe(
    (response: Student) => {console.log(response);},
    (error: HttpErrorResponse) => {alert(error.message)})
  }

}

