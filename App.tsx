import {NativeBaseProvider, StatusBar} from "native-base";

import { Theme } from "./src/styles/themes";
import Routers from "./src/Routers/Router";

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <Routers />
    </NativeBaseProvider> 
  );
}

