export class Utility {
  static getCountryNameFromCode(code: string, codes: any): string {
    const country = codes.filter(x => x['code'] === code)[0];
    return country.name;
  }
}
