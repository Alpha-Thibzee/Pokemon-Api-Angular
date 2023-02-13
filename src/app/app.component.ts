import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public isDark : boolean = true;
  public imgSrc : string = "logo-blanc";

  changeMode() {

    this.isDark = !this.isDark;
    this.document.body.classList.toggle('light');
    this.document.body.classList.toggle('dark');

    if (this.imgSrc === "logo"){
      this.imgSrc = "logo-blanc";
    } else {
      this.imgSrc = "logo";
    }

  }


}
