import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "./Container";
import { arrow_right, globe } from "../assets";

const Wrapper = styled.div`
  background-color: ${(props) => (props.dark ? "#212129" : "transparent")};
  color: ${(props) => (props.dark ? "#ffffff" : "#1a1a1a")};
  // padding-top: ${(props) => (props.dark ? "7.2rem" : "unset")};
  padding-top: 7.2rem;
  padding-bottom: 7.2rem;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 9.6rem;

  .captionText {
    width: 55%;
    display: flex;
    align-items: center;
    // color: var(--primary);

    h1 {
      position: relative;
      width: max-content;

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

    &.mb {
      display: none;
    }
  }

  .captionImg {
    width: 45%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;

    img {
      width: 100%;
    }

    &.mb {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 4.8rem;

    .lg {
      display: none;
    }
    .captionText,
    .captionImg {
      width: 100%;

      &.mb {
        display: block;
      }
      &.lg {
        display: none;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  position: relative;
  scroll-behavior: smooth;

  .stepNavigation {
    width: 45%;
    list-style: none;
    position: sticky;
    top: 7.2rem;
    height: fit-content;

    .item {
      color: ${(props) => (props.dark ? "#c5c5c5" : "#acacac")};
      transition: all 200ms ease-in;

      &.active {
        color: ${(props) => (props.dark ? "#ffffff" : "#1a1a1a")};
        font-weight: 700;
      }
    }
  }

  .contentList {
    width: 55%;
    scroll-behavior: smooth;
  }

  @media screen and (max-width: 768px) {
    .stepNavigation {
      display: none;
    }
    .contentList {
      width: 100%;
    }
  }
`;

const Summary = styled.div`
  .imgWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40rem;
    overflow: hidden;
    width: 100%;
    background-color: ${(props) => props.bg || "#2a446b10"};
    margin-bottom: 4.8rem;

    img {
      width: 90%;
    }
  }

  .heading {
    margin-bottom: 2.4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .visit {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      background-color: transparent;
      transition: background-color 0.2s ease-out;

      &:hover {
        background-color: #2a446b10;
      }

      span {
        margin: 0 5px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .imgWrapper {
      height: 18rem;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 2.4rem;
  width: fit-content;

  span {
    // background-color: #deb887;
    background-color: #2a446b10;
    color: #2a446b;
    font-size: 12px;
    font-weight: 500;
    display: inline-block;
    width: fit-content;
    padding: 1rem 2.4rem;
    border-radius: 2rem;

    &.spacer {
      padding: 1rem 1.2rem;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 5.6rem;
    grid-gap: 1.2rem;
    justify-content: center;

    span {
      padding: 0.75rem 1.2rem;
      font-size: 13px;
      line-height: 21px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #2a446b10;
  margin: 1.2rem 0;
`;

const Spacer = styled.div`
  height: ${(props) => props.size + "rem"};

  @media screen and (max-width: 768px) {
    height: 4.8rem;
  }
`;

const ContentPair = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2.4rem;
  }
`;

// const debounce = (method, delay) => {
//   clearTimeout(method._tId);
//   method._tId = setTimeout(function () {
//     method();
//   }, delay);
// };

const getTopValue = (el) => {
  return window.pageYOffset + el.getBoundingClientRect().top;
};

const toggleActiveStep = (id) => {
  document.querySelectorAll(".stepNavigation .item").forEach((el) => {
    if (el.id === id) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

const handleScroll = () => {
  document.querySelectorAll(".listItem").forEach((el) => {
    let topVal = getTopValue(el);
    let append_str = el.id.split("_")[1];

    if (topVal > 48 && topVal <= 72) {
      toggleActiveStep(`step_${append_str}`);
    }
  });
};

const SectionWrapper = ({ dark, captionText, steps = [], listItems = [] }) => {
  useEffect(() => {
    document.querySelector("main").addEventListener("scroll", () => {
      handleScroll();
    });
  });

  return (
    <Wrapper id="work" dark={dark} className="scrollSnapChild">
      <Container>
        <Content dark={dark} className="content">
          <ul className="stepNavigation">
            <Header>
              <div className="captionText lg">
                <h1 className="displayLarge">{captionText ?? "My work"}</h1>
              </div>
            </Header>
            {steps.map((item) => (
              <div key={`step_${item.step}`}>
                <li>
                  <a
                    href={`/#listItem_${item.step.split(" ").join("")}`}
                    id={`step_${item.step.split(" ").join("")}`}
                    className="textLarge item step"
                  >
                    {item.step}
                  </a>
                </li>
                <Spacer size="2.4" />
              </div>
            ))}
          </ul>
          <div className="contentList">
            <Header>
              <div className="captionText mb">
                <h1 className="displayLarge">{captionText ?? "My work"}</h1>
              </div>
            </Header>
            {listItems.map((item) => (
              <Summary
                key={`listItem_${item.heading}`}
                id={`listItem_${item.heading.split(" ").join("")}`}
                className="listItem"
                bg={item.bg}
              >
                <div className="imgWrapper">
                  {item.snap && <img src={item.snap} alt={item.heading} />}
                </div>
                <h3 className="textLarge heading">
                  <span>{item.heading}</span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="visit"
                    >
                      <img src={globe} className="icon" alt="globe" />
                      <span>Visit</span>
                      <img src={arrow_right} alt="arrow right" />
                    </a>
                  )}
                </h3>
                <Divider />
                <Spacer size="2.4" />
                <ContentPair>
                  <div>
                    <h4 className="textMediumBold title">Objective</h4>
                  </div>
                  <div>
                    <p className="textMedium description">{item.objective}</p>
                  </div>
                </ContentPair>
                <Spacer size="2.4" />
                <ContentPair>
                  <div>
                    <h4 className="textMediumBold title">My role</h4>
                  </div>
                  <div>
                    <p className="textMedium description">{item.role}</p>
                  </div>
                </ContentPair>
                <Spacer size="2.4" />
                <ContentPair>
                  <div>
                    <h4 className="textMediumBold title">Tags</h4>
                  </div>
                  <div>
                    <Tags>
                      {item.tags?.map((tag) => (
                        <div key={`${item.heading}_${tag}`}>
                          <span>{tag}</span>
                        </div>
                      ))}
                    </Tags>
                  </div>
                </ContentPair>
                <Spacer size="2.4" />

                <Spacer size="4.8" />
              </Summary>
            ))}
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
};

SectionWrapper.propTypes = {
  dark: PropTypes.bool,
  captionImg: PropTypes.string,
  captionText: PropTypes.string,
  service: PropTypes.string,
  steps: PropTypes.array.isRequired,
  listItems: PropTypes.array.isRequired,
};

export default SectionWrapper;
