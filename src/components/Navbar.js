'use client';
import styled from "styled-components";
import { FaBandcamp } from "react-icons/fa";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%);
  backdrop-filter: blur(8px);
  font-family: "Gotham", sans-serif;
  @media (max-width: 768px) { padding: 0 20px; }
`;

const NavList = styled.ul`
  display: flex; gap: 35px; list-style: none; align-items: center; margin: 0; padding: 0;
  @media (max-width: 1024px) { display: none; }
`;

const NavItem = styled.li`
  a { color: white; text-decoration: none; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3em; transition: 0.3s; opacity: 0.7; }
  a:hover { color: #B1A27A; opacity: 1; }
`;

const RightSection = styled.div`
  display: flex; align-items: center; justify-content: flex-end; width: 150px;
  a { color: white; font-size: 24px; transition: 0.3s; &:hover { color: #B1A27A; } }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <div style={{ width: '150px' }}>
        <img src="/logo-menu-agya.png" alt="Agya" style={{ height: '45px', width: 'auto' }} />
      </div>
      <NavList>
        <NavItem><a href="#">Início</a></NavItem>
        <NavItem><a href="#">Sobre</a></NavItem>
        <NavItem><a href="#">Artistas</a></NavItem>
        <NavItem><a href="#">Lançamentos</a></NavItem>
        <NavItem><a href="#">Tutoriais</a></NavItem>
        <NavItem><a href="#">Contato</a></NavItem>
      </NavList>
      <RightSection>
        <a href="https://agyasounds.bandcamp.com" target="_blank" rel="noreferrer"><FaBandcamp /></a>
      </RightSection>
    </NavContainer>
  );
}
