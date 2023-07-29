import React, { FC } from "react";
import styles from "./NavBar.module.css";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const location = useLocation();
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/"
          active={location.pathname === "/"}
          className={styles.Link}
        >
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={styles.Link}
          as={Link}
          to="/archived"
          active={location.pathname === "/archived"}
        >
          Archived
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
