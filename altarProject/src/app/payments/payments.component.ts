import {
  Component,
  OnInit,  
  Input  
} from '@angular/core';

import { interval, Subscription} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup ,FormControl} from '@angular/forms';
import {
 PaymentsModel
} from '../models/Payment/PaymentsModel.model'

import { StateService, State } from '../services/state/state.service';

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  
  @Input()
  formGroup: FormGroup;
  dataSource: PaymentsModel[]; 
  sub1 : Subscription;   
  payment_amount: string;
  payment_name: string; 
  your_code: string;
  displayedColumns: string[] = [
       'name'
      , 'amount'
      , 'code'
      , 'grid_code'      
  ];   

  estado: State;

  constructor( private stateService: StateService,private http: HttpClient ) {  
   
  }

  ngOnInit() {
    //console.log("ngOnInit de payments");
    this.stateService.state.subscribe((estado) => {
      this.estado = estado

      //console.log(JSON.stringify(this.estado))
    });

    
    this.formGroup = new FormGroup({
      payment_name: new FormControl(this.payment_name),
      your_code: new FormControl(this.your_code),
      payment_amount: new FormControl(this.payment_amount)    
    });

    
   
    if(this.estado.payments_dataSource === null || this.estado.payments_dataSource === undefined  || this.estado.payments_dataSource === [])
    {
      //Code came from grid page      

      let new_arr = [];   

      for (var i = 0; i < 5; i++) {
        const line: PaymentsModel = {
          name : '',
          amount  : '',
          code : '',
          grid_code : ''
        }; 
      
        new_arr.push(line);
    
      }     
      this.dataSource = new_arr;  
    }
    else{    
      
      // console.log(this.code);
      this.dataSource = this.estado.payments_dataSource;
      this.your_code = this.estado.payments_dataSource[this.dataSource.length -1].code;
    }
        
    var saved_code = this.estado.code;
    
    if(saved_code != null && saved_code != undefined)
    {
      this.your_code = saved_code;
    }
    else
    {
      this.your_code = '';
    }    

    this.sub1 = interval(2000).subscribe((x =>{ 
        this.your_code = this.generate_random_int().toString(); 
    }));
  
  }
  
  ngOnDestroy() {
    // guarda o estado , no atraves do state service
    this.stateService.changePayments_state('',this.your_code, this.dataSource);    
    this.sub1.unsubscribe();  
  } 

  generate_random_int(): number{
    return Math.floor(Math.random() * 100);
  }

  // Saves payments list via API
  save_payment_list(){
    
      // API method path : DUMMY
      const path = 'http://localhost/AltarProjAPI/api/payments/save_payments_list'; 
    
      return this.http.post(path , this.estado.payments_dataSource);              

  }

  add_payment(){
    var line_updated = false;
    for (var i = 0; i < 5; i++) {
      if(this.dataSource[i].code === '' && !line_updated)
      {
        this.dataSource[i].name = this.payment_name;
        this.dataSource[i].code = this.your_code;
        this.dataSource[i].amount = this.payment_amount;
        this.dataSource[i].grid_code = '100';

        line_updated = true;
      }
    }    
    
    if(!line_updated)
    {
      // add new line
      const line: PaymentsModel = {
        name : this.payment_name,
        code : this.your_code,
        amount : this.payment_amount,
        grid_code : '100'
      }; 

      this.dataSource.push(line);
      this.dataSource = [...this.dataSource]; // refresh the data      
    }

    // cleat input fields
    this.payment_name = '';
    this.payment_amount = '';
  }  
  
  
}
