import { Injectable } from '@angular/core';
import { LogType } from './log.type';
import { Operator } from './operator';
@Injectable()
export class DataService {

  constructor() { }

  getLogTypes() {
    return [
     new LogType(1, 'VM Logs' ),
     new LogType(2, 'Management Server' ),
     new LogType(3, 'Secondary Storage' ),
     new LogType(100, 'Log String' )
    ];
  }

  getOperators() {
    return [
      new Operator(1, 1, 'Arizona' ),
      new Operator(2, 1, 'Alaska' ),
      new Operator(3, 1, 'Florida'),
      new Operator(4, 1, 'Hawaii'),
      new Operator(5, 2, 'Gujarat' ),
      new Operator(6, 2, 'Goa'),
      new Operator(7, 2, 'Punjab' ),
      new Operator(8, 3, 'Queensland' ),
      new Operator(9, 3, 'South Australia' ),
      new Operator(10, 3, 'Tasmania'),
      new Operator(11, 100, 'Equals'),
      new Operator(12, 100, 'Not Equals'),
      new Operator(13, 100, 'Contains'),
      new Operator(14, 100, 'Not Contains')
     ];
   }

}
