import { MainComponent } from './pages/main/main.component';
import { MaidsComponent } from "./pages/maids/maids.component";
import { TechnitiansComponent } from './pages/technitians/technitians.component';
import { RoomsComponent } from "./pages/rooms/rooms.component";
import { TechRoomsComponent } from './pages/tech-rooms/tech-rooms.component';
import { RoomRepairsComponent } from "./pages/room-repairs/room-repairs.component";
import { PreconfigureComponent } from "./pages/preconfigure/preconfigure.component";
import { SettingsComponent } from "./pages/settings/settings.component";

export const routes = [
  { path: "", redirectTo:"/main", pathMatch: "full"},
  { path: "main", component: MainComponent },
  { path: "preconfigure", component: PreconfigureComponent },
  { path: "maids", component: MaidsComponent },
  { path: "technitians", component: TechnitiansComponent },
  { path: "rooms", component: RoomsComponent },
  { path: "tech-rooms", component: TechRoomsComponent },
  { path: "room-repairs", component: RoomRepairsComponent },
  { path: "settings", component: SettingsComponent },
];

export const navigatableComponents = [
    MainComponent,
    MaidsComponent,
    TechnitiansComponent,
    RoomsComponent,
    TechRoomsComponent,
    RoomRepairsComponent,
    PreconfigureComponent,
    SettingsComponent
];