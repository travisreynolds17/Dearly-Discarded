import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-band",
  templateUrl: "./band.component.html",
  styleUrls: ["./band.component.scss"]
})
export class BandComponent implements OnInit {
  // each of the properties typed 'any' are expected to contain an array of objects
  members: any;
  bandName: String;
  story: any;
  showFaqs: Boolean = false;
  showHistory: Boolean = false;
  faqs: {};

  constructor() {}

  ngOnInit() {
    this.bandName = "Dearly Discarded";
    this.members = [
      {
        name: "Jared Reynolds",
        position: "Guitar / vocals",
        img: "../../../assets/img/members/guitarist-thumb.jpg",
        description: "stuff stuff stuff stuff stuff stuuffuf hdiadh sfhdsasad"
      },

      {
        name: "John Something",
        position: "Bass / vocals",
        img: "../../../assets/img/members/bassist-thumb.jpg",
        description: "stuff stuff stuff stuff stuff stuuffuf hdiadh sfhdsasad"
      },

      {
        name: "Jason Something",
        position: "Drums",
        img: "../../../assets/img/members/drums-thumb.jpg",
        description: "stuff stuff stuff stuff stuff stuuffuf hdiadh sfhdsasad"
      },
      {
        name: "Amber Reynolds",
        position: "Manager / Photos",
        img: "../../../assets/img/members/guitarist-thumb.jpg",
        description: "stuff stuff stuff stuff stuff stuuffuf hdiadh sfhdsasad"
      }
    ];

    
    
    this.faqs = [
      {
        question: "Something",
        answer: "Something else"
      },

      {
        question: "Something",
        answer: "Something else"
      },

      {
        question: "Something",
        answer: "Something else"
      },

      {
        question: "Something",
        answer: "Something else"
      },

      {
        question: "Something",
        answer: "Something else"
      }
    ];
  }

  toggleFaqs() {
    this.showFaqs = !this.showFaqs;
    this.showHistory = false;
  }

  toggleHistory() {
    this.showHistory = !this.showHistory;
    this.showFaqs = false;
  }
}
