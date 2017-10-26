import { Injectable } from '@angular/core';
import { Country } from './country';
import { State } from './state';
@Injectable()
export class DataService {

  constructor() { }

  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(100, 'Log String' )
    ];
  }

  getStates() {
    return [
      new State(1, 1, 'Arizona' ),
      new State(2, 1, 'Alaska' ),
      new State(3, 1, 'Florida'),
      new State(4, 1, 'Hawaii'),
      new State(5, 2, 'Gujarat' ),
      new State(6, 2, 'Goa'),
      new State(7, 2, 'Punjab' ),
      new State(8, 3, 'Queensland' ),
      new State(9, 3, 'South Australia' ),
      new State(10, 3, 'Tasmania'),
      new State(11, 100, 'Equals'),
      new State(12, 100, 'Not Equals'),
      new State(13, 100, 'Contains'),
      new State(14, 100, 'Not Contains')
     ];
   }

}
