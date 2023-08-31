import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

    myControl: FormControl = new FormControl();

    options = [
      'One',
      'Two',
      'Three'
    ];
  
    filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.getOptions();  
  }

  getOptions(){
    // var apps = this.options[0];
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option => 
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
