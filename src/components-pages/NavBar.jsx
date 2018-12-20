import React, { Component } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <div className="NavBar">
        <Navbar className="bar-menu" light expand="lg">
          <NavbarBrand>
            <Link to="/">
              <img
                src="/medias/logo-petit.png"
                alt="navbarLogo"
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/alimentation">
                  Alimentation
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/mode">
                  Mode
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/sante_beaute">
                  Santé et Beauté
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/maison_ecolo">
                  Maison écologique
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/transports">
                  Transports
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/technologie">
                  Technologie
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/don_troc">
                  Dons et Trocs
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/occasions">
                  Occasions
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/reparation">
                  Réparations
                </NavItem>
              </Button>
              <Button className="button-category">
                <NavItem className="lien-category" tag={Link} to="/sengager">
                  S'engager
                </NavItem>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
