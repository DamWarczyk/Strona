import { Component } from '@angular/core';
import {HttpServiceService} from "./servis/http-service.service";
import {Student} from "./Interface/student";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  student: Student = ({
    name: "Daniel",
    surname: "Dante",
    emial: "D",
  });

  constructor(http: HttpServiceService) {
  }


  onClick() {
    console.log(this.student);
  }
}

