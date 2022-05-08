import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../Interface/student";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private apiServerURL = environment.ApiBaseUrl;
  constructor(private http: HttpClient) {
  }

  public getStudent(): Observable<Student[]>{
    return this.http.get<any>(`${this.apiServerURL}/student/all`)
  }

  public getStudentById(id: number): Observable<Student>{
    return this.http.get<any>(`${this.apiServerURL}/student/find/${id}`);
  }


  public addStudent(student: Student): Observable<Student>{
    return this.http.post<any>(`${this.apiServerURL}/student/add`, student);
  }

  public updateStudent(student: Student): Observable<Student>{
    return this.http.put<any>(`${this.apiServerURL}/student/update`, student);
  }

  public deleteStudent(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerURL}/student/delete/${studentId}`);
  }
}
