import Header from "./components/Header";
// import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import TeamList from "./components/TeamList";
import ConditionalComponent from "./components/ConditionalComponent";
// import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <ConditionalComponent />
      <Footer />
    </>
  );
}

export default App;
