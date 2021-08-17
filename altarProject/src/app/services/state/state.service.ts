import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LineModel } from 'src/app/models';
import { PaymentsModel } from 'src/app/models/Payment/PaymentsModel.model';

const INITIAL_STATE: State = {
  
  payments_dataSource: null,
  payments_name : '',
  payments_code: '',
  dataSource: null, 
  character: '',
  code: ''
};

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class StateService {

    private _state = new BehaviorSubject<State>(INITIAL_STATE);

    // broadcast the state, so we create an observable
    state = this._state.asObservable(); 

    constructor() { }

    changestate(newcharacter: string, newcode: string, newdataSource : LineModel[] ) {
      const oldState = this._state.getValue()
     
      this._state.next({ ...oldState, character: newcharacter, code:  newcode, dataSource : newdataSource,
        payments_dataSource : oldState.payments_dataSource, payments_name:  oldState.payments_name, 
        payments_code : oldState.payments_code});
      
    }

    get_state(): State{    
      return this._state.getValue();
    }  
    
    
    changePayments_state(new_payments_name: string, new_payments_code: string, new_payments_dataSource : PaymentsModel[] ) {
      const oldState = this._state.getValue()
      this._state.next({ ...oldState,  payments_dataSource : new_payments_dataSource, payments_name:  new_payments_name, 
        payments_code : new_payments_code, character: oldState.character, code : oldState.code, dataSource : oldState.dataSource});

      // console.log("guardou o estado");
    }
}

export interface State {
  payments_dataSource: PaymentsModel[],
  payments_name : string,
  payments_code: string,
  character: string;
  code: string;
  dataSource : LineModel[]
}