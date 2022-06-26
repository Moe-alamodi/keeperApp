import React, { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import notes from "./notes";
import LogIn from "./components/LogIn";
import "./App.css";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const isLoggedInHandler = () => {
    setIsloggedIn(true);
  };
  const isLoggedOutHandler = () => {
    setIsloggedIn(false);
  };
  let content = isLoggedIn ? (
    <div className="notes-dashbored">
      <Header loggedOut={isLoggedOutHandler} />
      <Card noteData={notes} style={{ backGroundColor: "#c68c53a8" }} />
      <Footer />
    </div>
  ) : (
    <LogIn loginAction={isLoggedInHandler} />
  );
  return <div>{content}</div>;
}

export default App;
