import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  lyrics: String;
  songs: String;

  constructor() {}

  ngOnInit() {
    this.lyrics =
      '"Lorem whatever hi I love bean and bean salad, looking like bean stuff"';
    this.songs = "Dove Hugs";
  }
}
