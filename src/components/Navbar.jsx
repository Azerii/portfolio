import styled from "styled-components";
import Container from "./Container";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  padding: 16px 0;
  width: 100vw;
  z-index: 1;
`;

const Brand = styled.a``;

const Menu = styled.ul`
  display: flex;
  align-item: center;

  .item {
    position: relative;
    padding: 0 16px;
    width: max-content;

    a {
      width: max-content;
    }

    &.active::before {
      content: "";
      position: absolute;
      top: -2px;
      left: 0;
      height: 3px;
      width: 40%;
      background-color: var(--primary);
    }
  }
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Container className="row space-between">
        <Brand href="/" className="textRegular">
          Azerii
        </Brand>
        <Menu>
          <li className="item">
            <a href="/" className="textRegular">
              Work
            </a>
          </li>
          <li className="item">
            <a href="/" className="textRegular">
              About me
            </a>
          </li>
        </Menu>
      </Container>
    </Wrapper>
  );
}
