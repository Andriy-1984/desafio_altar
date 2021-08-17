import { Component } from '@angular/core';
import { faHome,faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { StateService, State } from './services/state/state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'altarProject';
  faHome = faHome;
  faMoneyCheck = faMoneyCheck;   

  constructor(private stateService : StateService) { }

  ngOnInit() {
   
  }
 
}
