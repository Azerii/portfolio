import styled, { keyframes } from "styled-components";
import {
  github_octocat,
  gmail_logo,
  linkedin_logo,
  twitter_logo,
} from "../assets";
import Container from "./Container";

// const colors = [
//   "#2a446b40",
//   "#2a446b20",
//   "#2a446b10",
//   "#2a446b30",
//   "#2a446b40",
// ];

const colors = {
  github: "#04060A10",
  twitter: "#52A7E710",
  linkedin: "#52A7E710",
  gmail: "#E6433610",
};

const colors__link = {
  github: "#04060A50",
  twitter: "#52A7E750",
  linkedin: "#52A7E750",
  gmail: "#E6433650",
};
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
    font-size: 10.8rem;
    line-height: 12.8rem;
    // z-index: 2;

    .step {
      margin-left: 3ch;
    }
  }

  .mb {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .mb {
      display: block;
    }

    .lg {
      display: none;
    }

    padding-left: 2.4rem;

    .caption {
      font-size: 4.5rem;
      line-height: 6.9rem;
    }

    .floatersWrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 4.8rem;
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

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 3;
    width: 50%;
    aspect-ratio: 1/1;
    transition: all 0.3s ease-in-out 0.1s;

    &:hover {
      background-color: ${(props) =>
        props.bgIndex !== null
          ? colors__link[props.bgIndex]
          : "var(--primary)"};
    }
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    // border-radius: 50%;
    // border: 1px solid var(--primary);
    background-color: ${(props) =>
      props.bgIndex !== null ? colors[props.bgIndex] : "var(--primary)"};
    z-index: 0;
  }

  &.size-1 {
    top: -20%;
    right: 10%;
    width: 70rem;
    height: 80rem;
    animation-delay: -2666ms;
  }

  &.size-2 {
    top: 25%;
    left: -10%;
    width: 60rem;
    height: 60rem;
    animation-delay: -1666ms;
  }

  &.size-3 {
    top: 40%;
    right: 0;
    width: 40rem;
    height: 40rem;
    animation-delay: -3000ms;
  }

  &.size-4 {
    bottom: 5%;
    left: 30%;
    width: 30rem;
    height: 30rem;
    animation-delay: -566ms;
  }

  &.size-5 {
    top: 10%;
    left: 15%;
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    animation: unset;
    width: 25% !important;
    margin: 1.2rem 0;

    &.size-1 {
      width: auto;
      height: auto;
      top: unset;
      right: unset;
    }

    &.size-2 {
      width: auto;
      height: auto;
      top: unset;
      bottom: unset;
      left: unset;
    }

    &.size-3 {
      width: auto;
      height: auto;
      top: unset;
      right: unset;
    }

    &.size-4 {
      width: auto;
      height: auto;
      bottom: unset;
      left: unset;
    }

    &.size-5 {
      width: auto;
      height: auto;
      left: unset;
      top: unset;
    }

    // &::before {
    //   display: none;
    // }

    .icon {
      height: 3rem;
      // opacity: 0.5;
    }
  }
`;

const FloaterMb = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 6s ease-in-out infinite alternate;

  .icon {
    width: 8rem;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 3;
    width: 50%;
    aspect-ratio: 1/1;
    transition: all 0.3s ease-in-out 0.1s;

    &:hover {
      background-color: ${(props) =>
        props.bgIndex !== null
          ? colors__link[props.bgIndex]
          : "var(--primary)"};
    }
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    // border-radius: 50%;
    // border: 1px solid var(--primary);
    background-color: ${(props) =>
      props.bgIndex !== null ? colors[props.bgIndex] : "var(--primary)"};
    z-index: 0;
  }

  &.size-1 {
    top: -10%;
    right: 10%;
    width: 80%;
    aspect-ratio: 1/1;
    animation-delay: -2666ms;
  }

  &.size-2 {
    top: 25%;
    left: -10%;
    width: 60%;
    aspect-ratio: 1/1;
    animation-delay: -1666ms;
  }

  &.size-3 {
    top: 40%;
    right: 0;
    width: 50%;
    aspect-ratio: 1/1;
    animation-delay: -3000ms;
  }

  &.size-4 {
    bottom: 5%;
    left: 30%;
    width: 30%;
    aspect-ratio: 1/1;
    animation-delay: -566ms;
  }

  &.size-5 {
    top: 10%;
    left: 15%;
    width: 20%;
    aspect-ratio: 1/1;
    border-radius: 100%;
  }
`;

export default function MainCaption() {
  return (
    <Wrapper className="scrollSnapChild">
      <h4 className="textLargeBold">Odinaka Ezennia</h4>
      <h1 className="displayLarge caption">
        <span>Front</span>
        &nbsp;
        <span>End</span>
        <br />
        <span className="step">Engineer</span>
      </h1>

      <div className="floatersWrapper">
        <Floater className="size-1" bgIndex={"github"}>
          <a
            href="https://github.com/Azerii"
            className="link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={github_octocat} alt="github" className="icon" />
          </a>
        </Floater>
        <Floater className="size-2" bgIndex={"linkedin"}>
          <a
            href="https://www.linkedin.com/in/odinaka-ezennia-5a4870177/"
            className="link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={linkedin_logo} alt="linkedin" className="icon" />
          </a>
        </Floater>
        <Floater className="size-4" bgIndex={"gmail"}>
          <a
            href="mailto:ogidi58@gmail.com"
            className="link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={gmail_logo} alt="gmail" className="icon" />
          </a>
        </Floater>
        <Floater className="size-3" bgIndex={"twitter"}>
          <a
            href="/"
            className="link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={twitter_logo} alt="twitter" className="icon" />
          </a>
        </Floater>
        <FloaterMb className="size-1 mb" bgIndex={"github"} />
        <FloaterMb className="size-2 mb" bgIndex={"linkedin"} />
        <FloaterMb className="size-4 mb" bgIndex={"gmail"} />
        <FloaterMb className="size-3 mb" bgIndex={"twitter"} />
      </div>
    </Wrapper>
  );
}
