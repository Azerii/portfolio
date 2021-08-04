import styled from "styled-components";
import Container from "./Container";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  padding: 16px 0;
  width: 100vw;
  z-index: 1;
`;

const Brand = styled.a`
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`;

const Menu = styled.ul`
  display: flex;
  align-item: center;

  .item {
    position: relative;
    padding: 0 16px;
    width: max-content;
    transition: transform 0.2s ease-out;

    a {
      width: max-content;
    }

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: 0;
      height: 3px;
      width: 0;
      background-color: var(--primary);
      transition: width 0.2s ease-in-out 0.2s;
    }

    &.active::before,
    &:hover::before {
      width: 40%;
    }

    &:hover {
      transform: scale(1.1);

      a {
        color: #deb887;
      }
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
            <a href="/#work" className="textRegular">
              Work
            </a>
          </li>
          <li className="item">
            <a href="/#about" className="textRegular">
              About me
            </a>
          </li>
        </Menu>
      </Container>
    </Wrapper>
  );
}
