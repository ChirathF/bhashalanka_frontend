import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseRequest } from '../request/courseRequest';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  basepath = 'http://localhost:8080/api/course'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCourses(): Observable<any>{
    return this.httpClient.get(`${this.basepath}/all`);
   }

   getCourseByName(name:string){
    return this.httpClient.get(`${this.basepath}/${name}`);
   }

   addUniversity(course: CourseRequest){
    return this.httpClient.post(`${this.basepath}/add`,course);
   }


}
