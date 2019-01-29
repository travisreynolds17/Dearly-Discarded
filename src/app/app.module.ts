import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserComponent } from "./components/user/user.component";

import { DataService } from "./services/data.service";
import { RouterModule, Routes } from "@angular/router";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
