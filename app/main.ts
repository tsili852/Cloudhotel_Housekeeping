import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { setStatusBarColors } from "./utils/status-bar-util";
import { AppModule } from "./app.module";
import { StatusBar } from './utils/native';
import {registerElement} from "nativescript-angular/element-registry";

// setStatusBarColors();
StatusBar.setColor('#7AB1C6');
registerElement("Ripple", () => require("nativescript-ripple").Ripple);
platformNativeScriptDynamic().bootstrapModule(AppModule);
