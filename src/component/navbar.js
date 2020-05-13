import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">ComSci24</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://th.wikipedia.org/wiki/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%B1%E0%B8%94">Wikipedia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.youtube.com/watch?v=PUWoZkOoibI">MetricVDO</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Credit
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                61050134 Kitsanapong Koyta

                  
                </DropdownItem>
                <DropdownItem>
                61050151 Jirapat Sarakan

                 
                </DropdownItem>
                <DropdownItem>
          
                61050171 Natdanai Lohakitsongkram
                  
                </DropdownItem>
                <DropdownItem>
                61050217 Napat Rojjanawongwan
                  
                </DropdownItem>
                <DropdownItem>
          
          
                61050273 Phupa Sirikmonsing
                  
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><a
          className="Navbar-link"
          href="https://github.com/sun053123/React.js-metric-converter-"
          target="_blank"
          rel="noopener noreferrer"
          
          >
          Github
          </a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;