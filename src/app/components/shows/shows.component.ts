import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
  shows: any;

  constructor() {}

  ngOnInit() {
    this.shows = [
      {
        location: "Placeberg, KY",
        venue: "Name of Venue",
        image: "showsStock.jpg",
        date: "xx/yy/zz"
      },
      {
        location: "Placeberg, KY",
        venue: "Name of Venue",
        image: "showsStock.jpg",
        date: "xx/yy/zz"
      },
      {
        location: "Placeberg, KY",
        venue: "Name of Venue",
        image: "showsStock.jpg",
        date: "xx/yy/zz"
      },
      {
        location: "Placeberg, KY",
        venue: "Name of Venue",
        image: "showsStock.jpg",
        date: "xx/yy/zz"
      },
      {
        location: "Placeberg, KY",
        venue: "Name of Venue",
        image: "showsStock.jpg",
        date: "xx/yy/zz"
      },
      {
        location: "Placeberg, KY",
        venue: "Name of Venue",
        image: "showsStock.jpg",
        date: "xx/yy/zz"
      },
      {
        location: "Placeberg, KY",
        venue: "Name of Venue",
        image: "showsStock.jpg",
        date: "xx/yy/zz"
      }
    ];
  }
}
