import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import { categories } from "./assets/categories";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import { categoriesHead } from "./assets/tableHeaders";

const App: FC = () => {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <div className="m-5 min-h-[80vh] font-mono">
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
