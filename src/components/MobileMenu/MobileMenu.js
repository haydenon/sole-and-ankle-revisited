/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import NavLink from "../NavLink";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseWrapper>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" />
          </UnstyledButton>
        </CloseWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const CloseWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 0 1;
  gap: 20px;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  font-size: 0.875rem;
`;

const Overlay = styled(DialogOverlay)`
  background: var(--color-gray-700);
  z-index: 1;
  background: rgba(0, 0, 0, 0.33);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
`;

const Content = styled(DialogContent)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  width: 300px;
  background: var(--color-white);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;

  &:hover {
    color: var(--color-gray-900);
  }
`;

export default MobileMenu;
