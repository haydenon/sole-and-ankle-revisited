import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import SuperHeader from "../SuperHeader";
import UnstyledButton from "../UnstyledButton";
import MobileMenu from "../MobileMenu";
import NavLink from "../NavLink";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <ButtonsWrapper>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} size={20} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} size={20} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} size={20} />
          </UnstyledButton>
        </ButtonsWrapper>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const ButtonsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: flex;
    flex: 0 1 0;
    gap: 40px;
  }

  @media ${QUERIES.phoneAndBelow} {
    gap: 24px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 10vw - 4.75rem, 4rem);
  margin: 0px 48px;
  white-space: nowrap;
  flex: 0 0 0%;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndBelow} {
    &:last-child {
      display: none;
    }
  }
`;

export default Header;
