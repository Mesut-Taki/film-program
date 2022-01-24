import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alertify.confirm(
      "ÇIKIŞ",
      "ÇIKIŞ yapmak istediginizden eminmisiniz?",
      () => {
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("ÇIKIŞ Yapildi");
      }
    );
  };

  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/movie/:movieId">
            Film Merkezi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movies">
                Aile
              </Nav.Link>
              <Nav.Link as={Link} to="/movie/:movieId">
                Animasyon
              </Nav.Link>
              <Nav.Link as={Link} to="/movie/:movieId">
                Komedi
              </Nav.Link>
              <Nav.Link as={Link} to="/movie/:movieId">
                Dizi
              </Nav.Link>
              <Nav.Link as={Link} to="/movie/:movieId">
                Aksiyon
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button className="logout-button" onClick={handleLogout}>
            <CgLogOut /> &nbsp; ÇIKIŞ
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
