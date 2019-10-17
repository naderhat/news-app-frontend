export class Utility {
  static getCountryNameFromCode(code: string, codes: any): string {
    /* codes.forEach(element => {
      if (element['code'] === code) {
        return element['name'];
      }
    });
    return undefined; */
    const country = codes.filter(x => x['code'] === code)[0];
    return country.name;
  }
}
