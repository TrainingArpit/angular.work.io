import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
 getUsers(){
  return ['Arpit','Shruti','Akash'];
 }
}
