import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Country } from '../country';
import { State } from '../state';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  providers: [DataService]
})
export class SearchFilterComponent implements OnInit {
  @Output() onQueryCreated = new EventEmitter<boolean>();
  selectedCountry: Country = new Country(0, 'India');
  queryString: any;
  countries: Country[];
  states: State[];
  inputStringFilter: string;
  currentSelectedCountry: any;
  currentSelectedOperator: any;
  enableAddFilter: boolean;
  constructor(private _dataService: DataService) {
    this.countries = this._dataService.getCountries();
    this.enableAddFilter = false;
  }
  onOperatorSelect(operatorId, index) {
    this.currentSelectedOperator = this._dataService.getStates().filter((item) => item.id == operatorId)[0].name;
    this.enableAddFilter = true;
  }
  onSelect(countryid, filterIndex) {
    this.currentSelectedCountry = this._dataService.getCountries().filter((item) => item.id == countryid)[0].name;
    this.states = this._dataService.getStates().filter((item) => item.countryid == countryid);
  }
  createQuery(index) {
    this.queryString = this.currentSelectedCountry + ' ' + this.currentSelectedOperator + ' "' + this.inputStringFilter + '" ';
    this.onQueryCreated.emit(this.queryString);
    this.selectedCountry = new Country(0, 'India');
    this.states = [];
    this.inputStringFilter = '';
    this.enableAddFilter = false;
  }
  clearFilter() {
    this.selectedCountry = new Country(0, 'India');
    this.states = [];
    this.inputStringFilter = '';
    this.enableAddFilter = false;
  }
  ngOnInit() {
  }
}
