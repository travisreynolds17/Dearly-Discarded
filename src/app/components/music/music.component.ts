import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.scss"]
})
export class MusicComponent implements OnInit {
  albums: any;

  constructor() {}

  ngOnInit() {
    this.albums = [
      {
        title: "The Green Dude",
        art: "##",
        tracklist: [
          "First Song",
          "Second Song",
          "Third Song",
          "Fourth Song",
          "Fifth Song",
          "Sixth Song"
        ],
        date: "xx/xx/xxxx",
        label: "Dudes Slaying Riffs"
      },
      {
        title: "The Green Dude",
        art: "##",
        tracklist: [
          "First Song",
          "Second Song",
          "Third Song",
          "Fourth Song",
          "Fifth Song",
          "Sixth Song"
        ],
        date: "xx/xx/xxxx",
        label: "Dudes Slaying Riffs"
      },
      {
        title: "The Green Dude",
        art: "##",
        tracklist: [
          "First Song",
          "Second Song",
          "Third Song",
          "Fourth Song",
          "Fifth Song",
          "Sixth Song"
        ],
        date: "xx/xx/xxxx",
        label: "Dudes Slaying Riffs"
      },
      {
        title: "The Green Dude",
        art: "##",
        tracklist: [
          "First Song",
          "Second Song",
          "Third Song",
          "Fourth Song",
          "Fifth Song",
          "Sixth Song"
        ],
        date: "xx/xx/xxxx",
        label: "Dudes Slaying Riffs"
      },
      {
        title: "The Green Dude",
        art: "##",
        tracklist: [
          "First Song",
          "Second Song",
          "Third Song",
          "Fourth Song",
          "Fifth Song",
          "Sixth Song"
        ],
        date: "xx/xx/xxxx",
        label: "Dudes Slaying Riffs"
      }
    ];
  }
}
