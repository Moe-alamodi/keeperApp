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
  let content = isLoggedIn ? (
    <div className="notes-dashbored">
      <Header />
      <Card noteData={notes} />
      <Footer />
    </div>
  ) : (
    <LogIn loginAction={isLoggedInHandler} />
  );
  return <div>{content}</div>;
}

export default App;
