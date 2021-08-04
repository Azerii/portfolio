import styled, { keyframes } from "styled-components";
import { memoji } from "../assets";
import Container from "./Container";

const slide = keyframes`
  from {
    transform: translateX(0);
  }

  25% {
    transform: translateX(5rem);
  }

  50% {
    transform: translateX(0);
  }

  75% {
    transform: translateX(5rem);
  }

  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled(Container)`
  min-height: 100vh;
  width: 100vw;
  padding-top: 7.2rem;
  padding-bottom: 7.2rem;
  background-color: #2a446b05;
  position: relative;

  .heading {
    width: max-content;
    position: relative;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: 0;
      height: 3px;
      width: 40%;
      background-color: #deb887;
    }
  }

  .highlights {
    transform: rotateZ(90deg) translateY(-50%);
    position: absolute;
    top: 50%;
    right: -5%;

    .one {
      color: #000000;
    }

    .two {
      color: #2a446b;
    }

    .three {
      color: #deb887;
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

    .highlights {
      transform: unset;
      position: relative;
      top: unset;
      right: unset;
    }
  }
`;

const Shade = styled.div`
  // width: 30%;
  height: 100%;
  aspect-ratio: 1/1;
  background-color: #2a446b10;
  position: absolute;
  top: 0;
  animation: ${slide} 10s ease-in-out infinite alternate;
  z-index: 0;

  &.letterO {
    background-color: #00000010;
    border-radius: 100%;
    left: -20%;
    animation-delay: -2666ms;
  }

  &.letterD {
    background-color: #2a446b10;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    left: 25%;
    animation-delay: -1666ms;
  }

  &.letterI {
    background-color: #deb88710;
    left: unset;
    right: -20%;
    animation-delay: -666ms;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-top: 5rem;
  position: relative;
  z-index: 1;

  .textWrapper {
    width: 50%;
    padding-right: 3rem;

    h4 {
      margin-bottom: 3rem;
    }
  }

  .imgWrapper {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    .textWrapper,
    .imgWrapper {
      width: 100%;
    }

    .imgWrapper {
      margin-top: 4.8rem;

      img {
        width: 40%;
      }
    }
  }
`;

export default function About() {
  return (
    <Wrapper id="about" className="scrollSnapChild">
      <h1 className="heading displayLarge">About me</h1>
      <h4 className="textMedium highlights mb">
        <span className="one">Problem solving</span>
        &nbsp;•&nbsp;
        <span className="two">Creativity</span>
        &nbsp;•&nbsp;
        <span className="three">Passion</span>
      </h4>
      <Shade className="letterO" />
      <Shade className="letterD" />
      <Shade className="letterI" />
      <Content>
        <div className="textWrapper">
          <h4 className="displayRegular">
            I am a Frontend Engineer based in Oyo, Nigeria.
          </h4>
          <p className="textMedium">
            I love that I can build out amazing user interfaces created by
            talented designers. I have been able to pick up some design skills
            myself 😌.
            <br />
            <br />
            I enjoy solving problems. It's interesting being able to make
            awesome designs come to life with the right balance of utitlity and
            aesthetics.
            <br />
            <br />
            When I'm not coding, debugging or staring at my screen for hours 😂,
            you'll find me in the kitchen whipping up something zesty 🤤,
            reading or playing video games 😁.
          </p>
        </div>
        <div className="imgWrapper">
          <img src={memoji} alt="Odi" />
        </div>
      </Content>
      <h4 className="textMedium highlights lg">
        <span className="one">Problem solving</span>
        &nbsp;•&nbsp;
        <span className="two">Creativity</span>
        &nbsp;•&nbsp;
        <span className="three">Passion</span>
      </h4>
    </Wrapper>
  );
}
