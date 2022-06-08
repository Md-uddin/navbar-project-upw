import React, { useState } from "react";
import "./App.css";
import MobileNav from "./Components/Navbar/MobileNav";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <MobileNav key="any" />
    </div>
  );
}

export default App;
