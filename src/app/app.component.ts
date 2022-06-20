import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rx-test';

  constructor(private myServiceService: MyServiceService) {
    this.myServiceService.getNumbers().subscribe(console.log);
    this.myServiceService.getUsers().subscribe(console.log);
  }
}
