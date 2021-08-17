import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public localStorage: any;

  public TOKEN_TYPE_KEY = 'token_type';
  public TOKEN_DATA_KEY = 'token_data';
  public TOKEN_EMMITED = 'token_emmited';
  public TOKEN_EXPIRES = 'token_expires';
  public USER_INFO__KEY = 'user_info';
  public EMPLOYEE_INFO__KEY = 'employee_info';
  public APP_CONFIG_KEY = 'app-config';
  public REMEMBER_ME_KEY = 'remember_me';

  constructor() {
    if (!localStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }

  public set(key: string, value: string): void {
    this.localStorage[key] = value;
  }

  public get(key: string): string {
    return this.localStorage[key] || false;
  }

  public setObject(key: string, value: any): void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public getObject(key: string): any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public remove(key: string): any {
    this.localStorage.removeItem(key);
  }

  public clear(){
    this.localStorage.clear();
  }
}
