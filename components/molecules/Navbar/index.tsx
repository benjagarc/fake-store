"use client";

import { getCategories } from "@/request/products";
import { memo, useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import styles from "./index.module.scss";

export const CustomNavbar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        className={`bg-body-tertiary ${styles.customNavbar} shadow-sm`}
      >
        <Container fluid>
          <Navbar.Brand href="/">FakeStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                {categories.length > 0 &&
                  categories?.map((category) => (
                    <NavDropdown.Item
                      key={category}
                      href={`/category/${category}`}
                    >
                      {category}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default memo(CustomNavbar);
