import {
  Component,
  OnInit,  
  Input, 
  ViewChild,
  ElementRef
} from '@angular/core';

import { interval, Subscription} from 'rxjs';
import { FormGroup ,FormControl} from '@angular/forms';
import {
 LineModel
} from '../models/Line/Line.model';

import { faClock } from '@fortawesome/free-solid-svg-icons';
import { StateService, State } from '../services/state/state.service';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit { 
  faClock = faClock;  
  @ViewChild('generate_grid') generate_grid: ElementRef;
  @ViewChild('regenerate_grid') regenerate_grid: ElementRef;

  @Input()
  formGroup: FormGroup;
  dataSource: LineModel[];
  pageSize = 10;
  sub1 : Subscription;
  sub2 : Subscription;
  pageNumber = 1;
  character: string;
  code: string;
  client_char_allowed : boolean;
  start_gen : boolean;
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

  state: LineModel[];
  estado : State;

  constructor( 
     private stateService: StateService     
  ) {  
    
  }

  ngOnInit() {  
   
    this.stateService.state.subscribe((estado) => {
      this.estado = estado     
    });

    if(this.estado.dataSource === null || this.estado.dataSource === undefined  || this.estado.dataSource === [])
    {
      // console.log("vai reinicializar");
      this.initialize_dataSource();  
    }
    else{
      this.character = this.estado.character;
      this.code = this.estado.code;
      // console.log(this.code);
      this.dataSource = this.estado.dataSource;
    }
        
    this.client_char_allowed = true;
    this.formGroup = new FormGroup({
    character: new FormControl(this.character),
    code: new FormControl(this.code)    
    });

    this.sub1 = interval(2000).subscribe((x =>{     
      if(this.start_gen)
      {
        var refresh_btn = document.getElementById("regenerate_grid");
        if(refresh_btn != undefined && refresh_btn != null)
        {
          refresh_btn.click();
        }        
      }      
     
    }));

    this.sub2 = interval(4000).subscribe((x =>{      
      this.formGroup.controls['character'].enable();
    }));
  }
  
  ngOnDestroy() {
   
    this.stateService.changestate(this.character,this.code,this.dataSource);
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
}
  
  
  initialize_dataSource() {

    let new_arr = [];   

    for (var i = 0; i < 10; i++) {
      const line: LineModel = {
        _1 : '',
        _2 : '',
        _3 : '',
        _4 : '',
        _5 : '',
        _6 : '',
        _7 : '',
        _8 : '',
        _9 : '',
        _0 : ''
      }; 
    
     new_arr.push(line);
    
    }     
    this.dataSource = new_arr;
    
  }
  
  start_generator(){

    this.start_gen = true;
   
  }

  generate_chars(){
   if(this.start_gen)
   {   
    
    let new_arr = []; 
    

    for (var i = 0; i < 10; i++) {
      const line : LineModel= this.dataSource[i];    
      if(this.character == 'z')
      {
        if(i < 2)
        {
          line._0 = this.character;
          line._1 = this.character;
          line._2 = this.character;
          line._3 = this.character;
          line._4 = this.character;
          line._5 = this.character;
          line._6 = this.character;
          line._7 = this.character;
          line._8 = this.character;
          line._9 = this.character;
        }
        else
        {
          line._0 = this.random_char();
          line._1 = this.random_char();
          line._2 = this.random_char();
          line._3 = this.random_char();
          line._4 = this.random_char();
          line._5 = this.random_char();
          line._6 = this.random_char();
          line._7 = this.random_char();
          line._8 = this.random_char();
          line._9 = this.random_char();
        }
      }
      else{
        line._0 = this.random_char();
        line._1 = this.random_char();
        line._2 = this.random_char();
        line._3 = this.random_char();
        line._4 = this.random_char();
        line._5 = this.random_char();
        line._6 = this.random_char();
        line._7 = this.random_char();
        line._8 = this.random_char();
        line._9 = this.random_char();
      }
      // console.log(JSON.stringify(line));

      new_arr.push(line);
    };    
   

    // calcular o code
    const seconds = new Date().getSeconds();
    

    var first_index = seconds.toString().substring(0,1);
    var second_index = seconds.toString().substring(1);
    if(seconds < 10)
    {
      first_index = '0';
      second_index = seconds.toString().substring(0,1)
    } 

    const first_char =  this.dataSource[first_index]['_' + second_index.toString()];
    const second_char =  this.dataSource[second_index]['_' + first_index.toString()];

    var number_one : number = 0
    var number_two : number = 0

    for (var i = 0; i < 10; i++) {
      const line : LineModel= this.dataSource[i];
      number_one += (JSON.stringify(line).split(first_char).length - 1);
      number_two += (JSON.stringify(line).split(second_char).length - 1);

    }; 

    number_one = number_one > 9 ? Math. trunc(number_one / this.calculate_final_number(number_one)) : number_one;
    number_two = number_two > 9 ? Math. trunc(number_two / this.calculate_final_number(number_two)) : number_two;
    
    this.code = number_one.toString() + number_two.toString();
    
    // resets the character
    this.character = '';
    this.client_char_allowed = false;  
    this.formGroup.controls['character'].disable();     

    // guarda o state , no atraves do state service
    //this.stateService.changestate(this.formGroup.controls['character'].value, number_one.toString() + number_two.toString(),new_arr); 
    }
  }
  
  calculate_final_number(ocurrences:number){
      return Math.ceil(ocurrences / 9);
  }

  allow_client_char(){
    this.client_char_allowed = true;    
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // 1- 26
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  random_char() : string{    
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var rnd = this.getRandomInt(1, characters.length);


    return characters.charAt(rnd -1);    
  }
}
