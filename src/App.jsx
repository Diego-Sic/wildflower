import React from "react";
import Landingpage from "./components/Landingpage";
import ScrollComponent from "./components/ScrollComponent";
import { phrases } from "./components/static";
import Outro from "./components/Outro";

const App = () => {
  return (
    <div className="bg-gray-900">
      <Landingpage />
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
