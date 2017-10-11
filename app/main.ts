import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { setStatusBarColors } from "./utils/status-bar-util";
import { AppModule } from "./app.module";
import { StatusBar } from './utils/native';

// setStatusBarColors();
StatusBar.setColor('#004ba0');
platformNativeScriptDynamic().bootstrapModule(AppModule);
