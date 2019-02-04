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
        show: false,
        title: "The Green Dude",
        art: "album1.jpg",
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
        show: false,
        title: "The Green Dude",
        art: "album2.jpg",
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
        show: false,
        title: "The Green Dude",
        art: "album3.jpg",
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
        show: false,
        title: "The Green Dude",
        art: "album4.jpg",
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
