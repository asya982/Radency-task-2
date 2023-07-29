import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import { categories } from "./assets/categories";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import { categoriesHead } from "./assets/tableHeaders";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="appContainer">
        <Navbar />
        <Outlet />
        <Table headers={categoriesHead}>
          {categories.map((item, index) => (
            <CategoryItem key={index} {...item} />
          ))}
        </Table>
      </div>
      <Footer />
    </div>
  );
};

export default App;
