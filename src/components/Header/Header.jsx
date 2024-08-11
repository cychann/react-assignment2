import React, { useContext, useState } from 'react';
import ReactLogo from 'assets/images/logo.svg';
import { Link } from 'react-router-dom';
import * as S from './Header.styles';
import { AuthContext } from 'provider/AuthProvider';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState('service');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  const handleClickMenu = (item) => {
    setActiveMenu(item);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Logo src={ReactLogo} alt="Logo" />
      <S.NavList>
        <S.NavItem
          active={activeMenu === 'service'}
          onClick={() => handleClickMenu('service')}
        >
          <Link to="/">서비스</Link>
        </S.NavItem>

        {isLoggedIn ? (
          <>
            <S.NavItem
              active={activeMenu === 'mypage'}
              onClick={() => handleClickMenu('mypage')}
            >
              <Link to="/mypage/order">마이페이지</Link>
            </S.NavItem>
            <S.NavItem
              onClick={() => {
                setActiveMenu(null);
              }}
            >
              <Link to="/logout">로그아웃</Link>
            </S.NavItem>
          </>
        ) : (
          <>
            <S.NavItem
              active={activeMenu === 'signup'}
              onClick={() => handleClickMenu('signup')}
            >
              <Link to="/sign-up">회원가입</Link>
            </S.NavItem>
            <S.NavItem
              active={activeMenu === 'login'}
              onClick={() => handleClickMenu('login')}
            >
              <Link to="/login">로그인</Link>
            </S.NavItem>
          </>
        )}
      </S.NavList>

      <S.HamburgerIcon onClick={toggleMenu} />
      {isMenuOpen && (
        <S.MobileMenuOverlay onClick={toggleMenu}>
          <S.MobileMenu>
            <S.MobileNavItem
              active={activeMenu === 'service'}
              onClick={() => {
                handleClickMenu('service');
                toggleMenu();
              }}
            >
              <Link to="/">서비스</Link>
            </S.MobileNavItem>

            {isLoggedIn ? (
              <>
                <S.MobileNavItem
                  active={activeMenu === 'mypage'}
                  onClick={() => {
                    handleClickMenu('mypage');
                    toggleMenu();
                  }}
                >
                  <Link to="/mypage/order">마이페이지</Link>
                </S.MobileNavItem>
                <S.MobileNavItem
                  onClick={() => {
                    logout();
                    setActiveMenu(null);
                    toggleMenu();
                  }}
                >
                  <Link to="/logout">로그아웃</Link>
                </S.MobileNavItem>
              </>
            ) : (
              <>
                <S.MobileNavItem
                  active={activeMenu === 'signup'}
                  onClick={() => {
                    handleClickMenu('signup');
                    toggleMenu();
                  }}
                >
                  <Link to="/sign-up">회원가입</Link>
                </S.MobileNavItem>
                <S.MobileNavItem
                  active={activeMenu === 'login'}
                  onClick={() => {
                    handleClickMenu('login');
                    toggleMenu();
                  }}
                >
                  <Link to="/login">로그인</Link>
                </S.MobileNavItem>
              </>
            )}
          </S.MobileMenu>
        </S.MobileMenuOverlay>
      )}
    </S.HeaderContainer>
  );
}
