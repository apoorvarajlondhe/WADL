import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '33301_angular_proj';
  user=""
  age=""
  city=""
  getValues(val:any)
  {
    // console.log(val);
    this.user=val.user
    console.log(this.user);
    this.age=val.age
    console.log(this.age);
    this.city=val.city
    console.log(this.city);
  }
}
