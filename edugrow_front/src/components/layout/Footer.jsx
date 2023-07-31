import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  const Container = styled.div`
    position: fixed;
    bottom: 0px;
    width: 430px;
    height: 76px;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    background-color: white;
  `;

  const MenuList = styled.ul`
    text-align: center;
    padding: 0;
  `;

  const Menu = styled.li`
    display: inline-block;
    width: 60px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
  `;

  const Icon = styled.img`
    height: 40px;
    width: auto;
  `;

  return (
    <Container>
      <MenuList>
        <Menu>
          <Link>
            <Icon></Icon>홈
          </Link>
        </Menu>
        <Menu>
          <Link>
            <Icon></Icon>랭킹
          </Link>
        </Menu>
        <Menu>
          <Link>
            <Icon></Icon>공부
          </Link>
        </Menu>
        <Menu>
          <Link>
            <Icon></Icon>활동
          </Link>
        </Menu>
      </MenuList>
    </Container>
  );
}
