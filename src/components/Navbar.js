import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #0a0a0a;
  color: white;
  position: sticky;
  top: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <h2>Bhumika.dev</h2>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
