import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: #888894;
  position: relative;

  @media (max-width: 414px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  color: ${({ active }) => (active ? '#61dafb' : '#ffffff')};
`;

export const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  gap: 5px;
  background: transparent;
  border: none;
  z-index: 10;

  div {
    width: 25px;
    height: 3px;
    background-color: #ffffff;
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
  }
`;

export const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileMenu = styled.div`
  background: #888894;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
`;

export const MobileNavItem = styled.div`
  margin: 10px 0;
  cursor: pointer;
  color: ${({ active }) => (active ? '#61dafb' : '#ffffff')};
  font-size: 24px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
