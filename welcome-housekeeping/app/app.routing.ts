import { ConnectComponent } from "./pages/connect/connect.component";
import { ModalViewComponent } from "./pages/modal-view/modal-view.component";
import { ConfigurationComponent } from './pages/configuration/configuration.component';

export const routes = [
  { path: "", redirectTo:"/connect", pathMatch: "full"},
  { path: "connect", component: ConnectComponent },
  { path: "modal", component: ModalViewComponent },
  { path: "configuration", component: ConfigurationComponent }
  
];

export const navigatableComponents = [
    ConnectComponent,
    ModalViewComponent,
    ConfigurationComponent
];