import { Component, TemplateRef } from '@angular/core';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public modalRef: BsModalRef;
  toggleSearch: boolean;
  queryString: string;
  filters: any;
  constructor(private modalService: BsModalService) {
  this.queryString = '';
  this.filters = [];
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  toggleAdvanceSearch() {
    this.toggleSearch = !this.toggleSearch;
  }
  removeFilter(index) {
    this.filters.splice(index, 1);
  }
  appendQuery(query) {
    this.filters.push(query);
  }
  createQuery() {
    this.queryString = this.filters.join('AND ');
    this.modalRef.hide();
  }
}
