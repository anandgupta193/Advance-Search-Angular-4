import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LogType } from '../log.type';
import { Operator } from '../operator';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  providers: [DataService]
})
export class SearchFilterComponent implements OnInit {
  @Output() onQueryCreated = new EventEmitter<boolean>();
  selectedLogType: LogType = new LogType(0, 'India');
  queryString: any;
  logTypes: LogType[];
  operators: Operator[];
  inputStringFilter: string;
  currentSelectedCountry: any;
  currentSelectedOperator: any;
  enableAddFilter: boolean;
  constructor(private _dataService: DataService) {
    this.logTypes = this._dataService.getLogTypes();
    this.enableAddFilter = false;
  }
  onOperatorSelect(operatorId, index) {
    this.currentSelectedOperator = this._dataService.getOperators().filter((item) => item.id == operatorId)[0].name;
    this.enableAddFilter = true;
  }
  onSelect(logTypeId, filterIndex) {
    this.currentSelectedCountry = this._dataService.getLogTypes().filter((item) => item.id == logTypeId)[0].name;
    this.operators = this._dataService.getOperators().filter((item) => item.logTypeId == logTypeId);
  }
  createQuery(index) {
    this.queryString = this.currentSelectedCountry + ' ' + this.currentSelectedOperator + ' "' + this.inputStringFilter + '" ';
    this.onQueryCreated.emit(this.queryString);
    this.selectedLogType = new LogType(0, 'India');
    this.operators = [];
    this.inputStringFilter = '';
    this.enableAddFilter = false;
  }
  clearFilter() {
    this.selectedLogType = new LogType(0, 'India');
    this.operators = [];
    this.inputStringFilter = '';
    this.enableAddFilter = false;
  }
  ngOnInit() {
  }
}
