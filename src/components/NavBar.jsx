import React from 'react';
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

export default class NavBar extends React.Component {
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
        <Navbar light expand="md">
          <NavbarBrand>
            <Link to="/">
              <img
                src="medias/logo.png"
                alt="Logo"
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <Button className="button-category" tag={Link} to="/alimentation">
                  Alimentation
              </Button>
              <Button className="button-category" tag={Link} to="/mode">
                  Mode
              </Button>
              <Button className="button-category" tag={Link} to="/sante_beaute">
                  Santé & Beauté
              </Button>
              <Button className="button-category" tag={Link} to="/maison_ecolo">
                  Maison écologique
              </Button>
              <Button className="button-category" tag={Link} to="/transports">
                  Transports
              </Button>
              <Button className="button-category" tag={Link} to="/technologie">
                  Technologie
              </Button>
              <Button className="button-category" tag={Link} to="/don_troc">
                  Dons et Trocs
              </Button>
              <Button className="button-category" tag={Link} to="/reparation">
                  Réparations
              </Button>
              <Button className="button-category" tag={Link} to="/sengager">
                  S'engager
              </Button>
              <Button className="button-category" tag={Link} to="/categories">
                  Toutes les Catégories
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
