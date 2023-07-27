import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
