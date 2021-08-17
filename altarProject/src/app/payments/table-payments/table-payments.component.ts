import {
  Component,
  OnInit, 
  Input  
} from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-table-payments',
    templateUrl: './table-payments.component.html',
    styleUrls: ['./table-payments.component.scss']
})
export class PaymentsTableComponent implements OnInit { 

  @Input()
  dataSource: any[];  
  @Input()
  displayedColumns: string[] = [
    'name'
   , 'amount'
   , 'code'
   , 'grid_code'      
];  

  constructor(private activatedRoute: ActivatedRoute) {    
  }

  ngOnInit() {     
  } 
   
}
