import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedCountry: string;
  selectedCategory: string;
  selectedCountries = new Array<string>();
  selectedCategories = new Array<string>();

  constructor() {}

  ngOnInit() {}

  setSelectedCategory(categorySelected: string) {
    this.selectedCategory = categorySelected;
  }

  setSelectedCountry(countrySelected: string) {
    this.selectedCountry = countrySelected;
  }

  addSelectedCountry() {
    if (!this.selectedCountries.includes(this.selectedCountry)) {
      this.selectedCountries.push(this.selectedCountry);
      console.log('country: ' + this.selectedCountry);
      console.log('selected countries: ' + this.selectedCountries);
    }
  }

  addSelectedCategory() {
    console.log('category: ' + this.selectedCategory);
    if (!this.selectedCategories.includes(this.selectedCategory)) {
      this.selectedCategories.push(this.selectedCategory);
    }
  }
}
