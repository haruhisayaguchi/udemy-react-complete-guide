import { useState } from "react"

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
