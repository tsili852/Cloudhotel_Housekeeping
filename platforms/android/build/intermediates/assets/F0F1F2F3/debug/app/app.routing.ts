import { MainComponent } from './pages/main/main.component';
import { MaidsComponent } from "./pages/maids/maids.component";
import { TechnitiansComponent } from './pages/technitians/technitians.component';


export const routes = [
  { path: "", redirectTo:"/main", pathMatch: "full"},
  { path: "main", component: MainComponent },
  { path: "maids", component: MaidsComponent },
  { path: "technitians", component: TechnitiansComponent }
  
];

export const navigatableComponents = [
    MainComponent,
    MaidsComponent,
    TechnitiansComponent
];