"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 1rem;
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  text-decoration: none;
`;

const DesktopNav = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #1a1a1a;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #1a1a1a;

  @media (min-width: 768px) {
    display: none;
  }
`;

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = styled.div<MobileMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 40;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  color: #4b5563;
  text-decoration: none;
  padding: 0.75rem 0;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #1a1a1a;
  }
`;

const MobileMenuOverlay = styled.div<MobileMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Container>
        <Logo href="/">UNIQUE ON</Logo>
        <DesktopNav>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/membership">맴버십</NavLink>
          <NavLink href="/reviews">후기</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </DesktopNav>
        <MobileMenuButton onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </MobileMenuButton>
      </Container>
      <MobileMenuOverlay isOpen={isMenuOpen} onClick={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </MobileNavLink>
        <MobileNavLink href="/membership" onClick={() => setIsMenuOpen(false)}>
          맴버십
        </MobileNavLink>
        <MobileNavLink href="/reviews" onClick={() => setIsMenuOpen(false)}>
          후기
        </MobileNavLink>
        <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </MobileNavLink>
      </MobileMenu>
    </Nav>
  );
}
