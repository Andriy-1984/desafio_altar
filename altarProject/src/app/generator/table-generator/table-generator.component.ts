import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// App specific
import { 
  LineModel  
} from '../../models/Line/Line.model';

@Component({
    selector: 'app-table-generator',
    templateUrl: './table-generator.component.html',
    styleUrls: ['./table-generator.component.scss']
})
export class GeneratorTableComponent implements OnInit {
  @Input()
  dataSource: any[];  
  @Input()
  displayedColumns: string[] = [
    '1'
   , '2'
   , '3'
   , '4'
   , '5'
   , '6'         
   , '7'     
   , '8'
   , '9'
   , '10' 
  ];  

  constructor(private activatedRoute: ActivatedRoute) {    
  }

  ngOnInit() {     
  } 
   
}
