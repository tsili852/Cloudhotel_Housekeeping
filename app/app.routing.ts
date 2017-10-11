import { MainComponent } from './pages/main/main.component';
import { MaidsComponent } from "./pages/maids/maids.component";
import { TechnitiansComponent } from './pages/technitians/technitians.component';
import { RoomsComponent } from "./pages/rooms/rooms.component";

export const routes = [
  { path: "", redirectTo:"/main", pathMatch: "full"},
  { path: "main", component: MainComponent },
  { path: "maids", component: MaidsComponent },
  { path: "technitians", component: TechnitiansComponent },
  { path: "rooms", component: RoomsComponent }
];

export const navigatableComponents = [
    MainComponent,
    MaidsComponent,
    TechnitiansComponent,
    RoomsComponent
];