import { Component, OnInit,ViewChild, } from '@angular/core';
import { faHome,faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { GeneratorComponent} from '../generator/generator.component';
import { PaymentsComponent} from '../payments/payments.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  faHome = faHome;
  faMoneyCheck = faMoneyCheck; 

  constructor() { }

  @ViewChild(GeneratorComponent) child1: GeneratorComponent;
  @ViewChild(PaymentsComponent) child2: PaymentsComponent;
  ngOnInit() {
  }

}
