import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MerchComponent } from "./components/merch/merch.component";
import { LandingComponent } from "./components/landing/landing.component";
import { StoreComponent } from "./components/store/store.component";
import { ShowsComponent } from "./components/shows/shows.component";
import { NewsComponent } from "./components/news/news.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { MusicComponent } from "./components/music/music.component";
import { BandComponent } from "./components/band/band.component";
import { CartComponent } from "./components/cart/cart.component";

const routes: Routes = [
  {
    path: "merch",
    component: MerchComponent
  },
  {
    path: "landing",
    component: LandingComponent
  },
  {
    path: "shows",
    component: ShowsComponent
  },
  {
    path: "band",
    component: BandComponent
  },
  {
    path: "news",
    component: NewsComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "music",
    component: MusicComponent
  },

  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  LandingComponent,
  MerchComponent,
  StoreComponent,
  NewsComponent,
  BandComponent,
  GalleryComponent,
  ShowsComponent,
  MusicComponent,
  CartComponent
];
