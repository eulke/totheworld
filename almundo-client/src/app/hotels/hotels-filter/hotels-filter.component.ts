import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotels-filter',
  templateUrl: './hotels-filter.component.html',
  styleUrls: ['./hotels-filter.component.less']
})
export class HotelsFilterComponent implements OnInit {
  private showInput
  private showStarsFilter
  private qs
  hotelsForm: FormGroup
  starsPreferences = Array.from({ length: 5 }, (v, i) => { return { id: ++i, stars: Array(i) } }).reverse()

  constructor(private formBuilder: FormBuilder) {
    const formControls = this.starsPreferences.map(control => new FormControl(false));
    const selectAllControl = new FormControl(false);

    this.hotelsForm = this.formBuilder.group({
      starsPreferences: new FormArray(formControls),
      selectAll: selectAllControl,
      name: ''
    })
  }

  ngOnInit() {
    this.showInput = true
    this.showStarsFilter = true
    this.onChanges();
  }

  onChanges(): void {
    this.hotelsForm.get('selectAll').valueChanges.subscribe(bool => {
      this.hotelsForm
        .get('starsPreferences')
        .patchValue(Array(this.starsPreferences.length).fill(bool), { emitEvent: false });
    });

    this.hotelsForm.get('starsPreferences').valueChanges.subscribe(val => {
      const allSelected = val.every(bool => bool);
      if (this.hotelsForm.get('selectAll').value !== allSelected) {
        this.hotelsForm.get('selectAll').patchValue(allSelected, { emitEvent: false });
      }
    });
  }

  filterByStars() {
    const selectedPreferences = this.hotelsForm.value.starsPreferences
      .map((checked, index) => checked ? this.starsPreferences[index].id : null)
      .filter(value => value !== null);

      console.log(selectedPreferences)
  }

  onSubmit() {
    console.log(this.hotelsForm.value.name)
  }
}
