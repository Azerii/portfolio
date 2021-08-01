import styled, { keyframes } from "styled-components";
import {
  express_logo,
  github_octocat,
  mongodb_logo,
  nodejs_logo,
  react_logo,
} from "../assets";
import Container from "./Container";

const colors = [
  "#2a446b40",
  "#2a446b20",
  "#2a446b10",
  "#2a446b30",
  "#2a446b40",
];

// const colors = [
//   "#00000050",
//   "#00000040",
//   "#00000030",
//   "#00000020",
//   "#00000010",
// ];

const Wrapper = styled(Container)`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 14.4rem;

  .caption {
    .step {
      margin-left: 3ch;
    }
  }
`;

const bounce = keyframes`
  from {
    transform: translateY(0);
  }

  25% {
    transform: translateY(1.5rem);
  }

  50% {
    transform: translateY(0);
  }

  75% {
    transform: translateY(-1.5rem);
  }

  to {
    transform: translateY(0);
  }
`;

const Floater = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 6s ease-in-out infinite alternate;

  .icon {
    width: 8rem;
  }

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.3;
    // border: 1px solid var(--primary);
    background-color: ${(props) =>
      props.bgIndex !== null ? colors[props.bgIndex] : "var(--primary)"};
  }

  &.size-1 {
    top: -20%;
    right: 10%;
    width: 70rem;
    height: 80rem;
    animation-delay: -2666ms;
  }

  &.size-2 {
    top: 30%;
    left: -10%;
    width: 60rem;
    height: 60rem;
    animation-delay: -1666ms;
  }

  &.size-3 {
    top: 20%;
    right: 0;
    width: 40rem;
    height: 40rem;
    animation-delay: -666ms;
  }

  &.size-4 {
    bottom: 5%;
    left: 30%;
    width: 30rem;
    height: 30rem;
    animation-delay: -66ms;
  }

  &.size-5 {
    top: 10%;
    left: 15%;
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
  }
`;

export default function MainCaption() {
  return (
    <Wrapper>
      <h4 className="textLargeBold">Odinaka Ezennia</h4>
      <h1 className="displayLargeBold caption">
        <span>Full</span>
        &nbsp;
        <span>Stack</span>
        <br />
        <span className="step">Developer</span>
      </h1>

      <Floater className="size-1" bgIndex={0}>
        <img src={react_logo} alt="react" className="icon" />
      </Floater>
      <Floater className="size-2" bgIndex={1}>
        <img src={express_logo} alt="node js" className="icon" />
      </Floater>
      <Floater className="size-3" bgIndex={2}>
        <img src={nodejs_logo} alt="react" className="icon" />
      </Floater>
      <Floater className="size-4" bgIndex={3}>
        <img src={mongodb_logo} alt="react" className="icon" />
      </Floater>
      <Floater className="size-5" bgIndex={4}>
        <img src={github_octocat} alt="react" className="icon" />
      </Floater>
    </Wrapper>
  );
}
