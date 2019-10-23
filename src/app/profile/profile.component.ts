import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';

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

  constructor(private userService: UserService) {}

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
    }
    this.selectedCountry = '';
  }

  addSelectedCategory() {
    if (!this.selectedCategories.includes(this.selectedCategory)) {
      this.selectedCategories.push(this.selectedCategory);
    }
  }

  saveProfile() {
    console.log('save profile');
    this.userService.saveProfile(this.selectedCountries);
    this.selectedCountries = new Array<string>();
  }
}
