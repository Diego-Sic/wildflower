import React from "react";
import LandingPage from "./components/LandingPage";
import ScrollComponent from "./components/ScrollComponent";
import { phrases } from "./components/static";
import Outro from "./components/Outro";

const App = () => {
  return (
    <div className="bg-gray-900">
      <LandingPage />
      {phrases.map((phrase, index) => (
        <ScrollComponent
          key={index}
          textOne={phrase.textOne}
          textTwo={phrase.textTwo}
        />
      ))}
      <Outro />
    </div>
  );
};

export default App;
