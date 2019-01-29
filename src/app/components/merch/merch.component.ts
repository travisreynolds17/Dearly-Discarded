import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-merch",
  templateUrl: "./merch.component.html",
  styleUrls: ["./merch.component.scss"]
})
export class MerchComponent implements OnInit {
  shirts;
  hats;
  accessories;
  showHats: Boolean = false;
  showShirts: Boolean = false;
  showAccessories: Boolean = false;
  hatsExist: Boolean = false;
  shirtsExist: Boolean = false;
  accessoriesExist: Boolean = false;
  pause: Boolean = false; // This variable will prevent users from clicking on other categories until animation is done

  constructor() {}

  ngOnInit() {
    // TODO: Filling out list of merch

    this.shirts = [
      {
        style: "red logo",
        type: "t-shirt",
        inStock: 5,
        sizes: "S/M/L/XL",
        price: "$10",
        img: "../../../assets/img/merch/hoodie1-thumb.jpg"
      },
      {
        style: "blue logo",
        type: "t-shirt",
        inStock: 5,
        sizes: "S/M/L/XL",
        price: "$10",
        img: "../../../assets/img/merch/hoodie1-thumb.jpg"
      },
      {
        style: "yello logo",
        type: "t-shirt",
        inStock: 5,
        sizes: "S/M/L/XL",
        price: "$10",
        img: "../../../assets/img/merch/hoodie1-thumb.jpg"
      },
      {
        style: "red logo",
        type: "hoodie",
        inStock: 5,
        sizes: "S/M/L/XL",
        price: "$10",
        img: "../../../assets/img/merch/hoodie1-thumb.jpg"
      },
      {
        style: "blue logo",
        type: "hoodie",
        inStock: 5,
        sizes: "S/M/L/XL",
        price: "$10",
        img: "../../../assets/img/merch/hoodie1-thumb.jpg"
      },
      {
        style: "green logo",
        type: "hoodie",
        inStock: 5,
        sizes: "S/M/L/XL",
        price: "$10",
        img: "../../../assets/img/merch/hoodie1-thumb.jpg"
      }
    ];

    this.hats = [
      {
        style: "green logo",
        type: "ball cap",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/hat1-thumb.jpg"
      },
      {
        style: "pink logo",
        type: "ball cap",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/hat1-thumb.jpg"
      },
      {
        style: "aqua logo",
        type: "ball cap",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/hat1-thumb.jpg"
      },
      {
        style: "yellow logo",
        type: "ball cap",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/hat1-thumb.jpg"
      },
      {
        style: "purple logo",
        type: "ball cap",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/hat1-thumb.jpg"
      },
      {
        style: "orange logo",
        type: "ball cap",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/hat1-thumb.jpg"
      }
    ];
    this.accessories = [
      {
        style: "slim gold",
        type: "bracelet",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/accessories2-thumb.jpg"
      },
      {
        style: "slim silver",
        type: "bracelet",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/accessories2-thumb.jpg"
      },
      {
        style: "pink feathers",
        type: "tassels",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/accessories2-thumb.jpg"
      },
      {
        style: "blue stud",
        type: "earring",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/accessories2-thumb.jpg"
      },
      {
        style: "green hoop",
        type: "earring",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/accessories2-thumb.jpg"
      },
      {
        style: "orange chunky",
        type: "bracelet",
        inStock: 5,
        sizes: "adjustable",
        price: "$10",
        img: "../../../assets/img/merch/accessories2-thumb.jpg"
      }
    ];
  }

  // each toggle method will take the same pattern as toggleShirts
  toggleShirts() {
    if (!this.showShirts && !this.pause) {
      this.pause = true;
      // set shirts element to exist based on *ngIf
      this.shirtsExist = true;

      // move other categories offscreen
      this.showHats = false;
      this.showAccessories = false;

      // wait for moved elements to be offscreen, then take them out of the dom via ngIf
      let hide = setTimeout(() => {
        // apply class to shirts element to move it into position via class.show
        this.showShirts = true;
        this.accessoriesExist = false;
        this.hatsExist = false;
        this.pause = false;
      }, 1500);
    }
  }
  toggleHats() {
    if (!this.showHats && !this.pause) {
      this.pause = true;
      this.hatsExist = true;

      this.showAccessories = false;
      this.showShirts = false;

      let hide = window.setTimeout(() => {
        this.showHats = true;
        this.accessoriesExist = false;
        this.shirtsExist = false;
        this.pause = false;
      }, 1500);
    }
  }
  toggleAccessories() {
    if (!this.showAccessories && !this.pause) {
      this.pause = true;
      this.accessoriesExist = true;

      this.showShirts = false;
      this.showHats = false;

      let hide = window.setTimeout(() => {
        this.showAccessories = true;
        this.shirtsExist = false;
        this.hatsExist = false;
        this.pause = false;
      }, 1500);
    }
  }
}
