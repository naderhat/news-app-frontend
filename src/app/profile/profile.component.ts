import { Component, OnInit } from '@angular/core';
import { UserService } from '../services';
import { Profile } from '../models';

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
  profile: Profile;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.retrieveProfile().subscribe((res: Profile) => {
      if (res !== null) {
        this.profile = res;
        this.selectedCountries = this.profile.countryCodes;
        this.selectedCategories = this.profile.categories;
      }
    });
  }

  setSelectedCategory(categorySelected: string) {
    this.selectedCategory = categorySelected.trim();
  }

  setSelectedCountry(countrySelected: string) {
    this.selectedCountry = countrySelected.trim();
  }

  addSelectedCountry() {
    if (
      this.selectedCountry &&
      this.selectedCountry !== '' &&
      !this.selectedCountries.includes(this.selectedCountry)
    ) {
      this.selectedCountries.push(this.selectedCountry);
    }
    this.selectedCountry = '';
  }

  addSelectedCategory() {
    if (
      this.selectedCategory &&
      this.selectedCategory !== '' &&
      !this.selectedCategories.includes(this.selectedCategory)
    ) {
      this.selectedCategories.push(this.selectedCategory);
    }
    this.selectedCategory = '';
  }

  saveProfile() {
    this.userService.saveProfile(
      this.selectedCountries,
      this.selectedCategories
    );
  }
}
