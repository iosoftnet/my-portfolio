"use client";
import styles from "./navbar.module.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const AppBar = () => {
  return (
    <div className={styles.container}>
      <Navbar expand="sm" className="w-100">
        <Container>
          <Navbar.Brand className={styles.name} href="/">
            Muhammad Ishaq
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" className={styles.toggle}/>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="start"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div className={styles.links}>
                  <Nav.Link href="/about" className={styles.link}>
                    About
                  </Nav.Link>
                  <Nav.Link href="/education" className={styles.link}>
                    Education
                  </Nav.Link>
                  <Nav.Link href="/skills" className={styles.link}>
                    Skills
                  </Nav.Link>
                  <Nav.Link href="/experience" className={styles.link}>
                    Experience
                  </Nav.Link>
                  <Nav.Link href="/project" className={styles.link}>
                    Projects
                  </Nav.Link>
                  <Nav.Link href="/contact" className={styles.link}>
                    Contact
                  </Nav.Link>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
