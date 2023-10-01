import Login from "./src/Login";
import Register from "./src/Register";
import {NativeBaseProvider, StatusBar} from "native-base";

import { Theme } from "./src/styles/themes";

export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <Register />
    </NativeBaseProvider> 
  );
}

