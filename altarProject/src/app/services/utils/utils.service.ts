import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() {}

  getDateFromDatePickerValue(value) {
    return new Date(value.year, value.month - 1, value.day);
  }

  getDateStartFromDatePickerValue(value) {
    return new Date(value.year, value.month - 1, value.day, 0, 0, 0);
  }
  getDateEndFromDatePickerValue(value) {
    return new Date(value.year, value.month - 1, value.day, 23, 59, 59);
  }

  getDateToPicker(dateValue: Date): any {
    return {
      year: dateValue.getFullYear(),
      month: dateValue.getMonth() + 1,
      day: dateValue.getDate()
    };
  }
}
