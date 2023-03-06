import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SearchType } from '../../models/tech-type-option.model';



@Component({
  selector: 'app-toggle-all-favs',
  templateUrl: './toggle-all-favs.component.html',
  styleUrls: ['./toggle-all-favs.component.css']
})
export class ToggleAllFavsComponent {
  @Input() selectedValue: SearchType['postFavs'] = 'all';
  @Output() valueChange = new EventEmitter<SearchType['postFavs']>();

  selectOption(value: SearchType['postFavs']) {
    this.selectedValue = value;
    this.valueChange.emit(value);
  }
}
