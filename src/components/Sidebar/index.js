import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizza</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">FullMenu</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
