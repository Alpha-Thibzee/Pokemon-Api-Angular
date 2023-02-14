export class Pokemon {

  name: string | undefined;
  url: string| undefined;
  data: any;
  isShiny: boolean = false;


  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
    this.isShiny = false;
  }

}
