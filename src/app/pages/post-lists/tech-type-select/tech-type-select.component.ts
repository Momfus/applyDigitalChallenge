import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TechTypeOption } from '../../../models/tech-type-option.model';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-tech-type-select',
  templateUrl: './tech-type-select.component.html',
  styleUrls: ['./tech-type-select.component.css'],
})
export class TechTypeSelectComponent implements OnInit {
  @Input() selectedTechType!: TechTypeOption;
  @Output() selectedTechTypeChange = new EventEmitter<TechTypeOption>();

  technologyTypes: TechTypeOption[] = [
    { value: '', viewValue: 'Any', icon: '' },
    {
      value: 'angular',
      viewValue: 'Angular',
      icon: 'assets/logos/angular-logo.png',
    },
    {
      value: 'reactjs',
      viewValue: 'ReactJs',
      icon: 'assets/logos/react-logo.png',
    },
    { value: 'vuejs', viewValue: 'VueJs', icon: 'assets/logos/vue-logo.png' },
  ];

  constructor(private postService: PostService) {}

  ngOnInit() {
    const savedSelectedType = this.postService.loadFilterTechnologySearch(
      this.selectedTechType
    );
    const techType = this.technologyTypes.find(
      (type) => type.value === savedSelectedType.value
    );
    this.selectedTechType = techType || this.selectedTechType;

  }

  onSelectChange() {
    this.selectedTechTypeChange.emit(this.selectedTechType);
  }
}
