import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.name = "Bob";
    this.age = 30;
    this.address = {
      street: "777 Hello Lane",
      city: "Helloville",
      state: "Hell"
    };
    this.hobbies = ["Say hello", "hug", "run", "cook"];
  }

  onclick() {
    console.log("Hoi");
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log("deleted " + hobby);
    for (let index = 0; index < this.hobbies.length; index++) {
      if (this.hobbies[index] == hobby) {
        this.hobbies.splice(index, index);
      }
    }
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}
