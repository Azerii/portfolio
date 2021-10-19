import styled, { keyframes } from "styled-components";
import Container from "./Container";

const slide = keyframes`
  from {
    transform: translateX(0);
  }

  40% {
    transform: translateX(3rem);
  }

  60% {
    transform: translateX(0);
  }

  80% {
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
  background-color: #deb887;
  position: relative;
  overflow: hidden;

  .heading {
    width: max-content;
    text-shadow: 1px 1px 1px #deb887 ;
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
      color: #deb887;
    }

    .two {
      color: #000000;
    }

    .three {
      color: #deb887;
    }
  }

  .mb {
    display: none;
  }

  @media screen and (max-width: 768px) {
    background-color: transparent;
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
  background-color: #fff;
  position: absolute;
  top: 0;
  animation: ${slide} 10s ease-in-out infinite alternate;
  z-index: 0;

  &.letterO {
    background-color: #fff;
    border-radius: 100%;
    left: -5%;
    animation-delay: -2666ms;
  }

  &.letterD {
    background-color: #2a446b10;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    left: 35%;
    animation-delay: 1600ms;
  }

  &.letterI {
    background-color: #fff;
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
        <span className="one">Reserching</span>
        &nbsp;•&nbsp;
        <span className="two">Problem solving</span>
        &nbsp;•&nbsp;
        <span className="three">Passion</span>
      </h4>
      <Shade className="letterO" />
      <Shade className="letterD" />
      <Shade className="letterI" />
      <Content>
        <div className="textWrapper">
          <h4 className="displayRegular">
            I am a Frontend Engineer based in Lagos, Nigeria.
          </h4>
          <p className="textMedium">
            As a self taught front end developer, being able to build out amazing user interfaces created by
            talented designers is a great feeling. I have been able to learn and implement some design skills
            myself 😁.
            <br />
            <br />
            I enjoy solving problems and researching. It's interesting being able to make
            awesome designs come to life with the right balance of utitlity and
            aesthetics.
            <br />
            <br />
            When I'm not coding, debugging or staring at my screen for hours 😁,
            i will be seen dancing to hit songs and sweating in the process😂.
          </p>
        </div>
      </Content>
      <h4 className="textMedium highlights lg">
        <span className="one">Reserching</span>
        &nbsp;•&nbsp;
        <span className="two">Problem solving</span>
        &nbsp;•&nbsp;
        <span className="three">Passion</span>
      </h4>
    </Wrapper>
  );
}
