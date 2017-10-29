import { MainComponent } from './pages/main/main.component';
import { MaidsComponent } from "./pages/maids/maids.component";
import { TechnitiansComponent } from './pages/technitians/technitians.component';
import { RoomsComponent } from "./pages/rooms/rooms.component";
import { TechRoomsComponent } from './pages/tech-rooms/tech-rooms.component';

export const routes = [
  { path: "", redirectTo:"/main", pathMatch: "full"},
  { path: "main", component: MainComponent },
  { path: "maids", component: MaidsComponent },
  { path: "technitians", component: TechnitiansComponent },
  { path: "rooms", component: RoomsComponent },
  { path: "tech-rooms", component: TechRoomsComponent }
];

export const navigatableComponents = [
    MainComponent,
    MaidsComponent,
    TechnitiansComponent,
    RoomsComponent,
    TechRoomsComponent
];