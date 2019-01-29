import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  // stores whether hamburger menu is transformed to X shape
  public showHam: Boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleHam() {
    console.log(this.showHam);
    this.showHam = !this.showHam;
  }
}
