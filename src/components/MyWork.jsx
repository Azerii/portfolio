import { digifigs_snap, postpaddy_snap } from "../assets";
import SectionWrapper from "./SectionWrapper";

const steps_1 = [
  {
    href: "#",
    step: "Digifigs website",
  },
  {
    href: "#",
    step: "PostPaddy",
  },
  {
    href: "#",
    step: "03  Lead Generation Tactics",
  },
  {
    href: "#",
    step: "04  Lead Nurturing Tactics",
  },
  {
    href: "#",
    step: "05  Creative Development",
  },
  {
    href: "#",
    step: "06  Setup, Management & Optimisation",
  },
  {
    href: "#",
    step: "07  Reporting",
  },
];

const listItems_1 = [
  {
    snap: digifigs_snap,
    bg: "#0000fe10",
    heading: "Digifigs website",
    objective:
      "Digifigs Ltd needed to position itself as the most resourceful, easy to work with, and welcoming digital and growth marketing solutions provider. Given their range of services, they needed a well built online stage to showcase all these to potential clients and beneficiaries.",
    role: "Build out the individual UI components, supervise my team members to assemble them according to the design specifications, handle form submissions",
    link: "https://digifigs.com",
    tags: ["React", "Styled components"],
  },
  {
    snap: postpaddy_snap,
    bg: "#0d2b5710",
    heading: "PostPaddy",
    objective:
      "Digifigs Ltd needed to position itself as the most resourceful, easy to work with, and welcoming digital and growth marketing solutions provider. Given their range of services, they needed a well built online stage to showcase all these to potential clients and beneficiaries.",
    role: "Build out the individual UI components, supervise the team to assemble them according to the design specifications, handle form submissions",
    link: "https://postpaddy.com",
    tags: ["React", "Redux", "Styled components", "Sass"],
  },
  {
    desc: "Our expertise in keyword research helps to reveal the most relevant terms, words, and phrases which are vital to positioning your brand accurately to what search engine users are searching for.",
    heading: "03  Keyword Research",
  },
  {
    desc: "Capture your customers' wants and needs,  attract their attention, and persuade them to profitable action through expertly-written copy. We adhere to research-based keywords that are highly-sought-after and have the potential for a wide reach.",
    heading: "04  Ads Copywriting",
  },
  {
    desc: "Retain brand relevance as you serve a dynamic audience, rival countless competitors and operate within a diverse marketplace. Vibrant management and optimization techniques keep your marketing campaigns, tactics and strategies active and in premium condition at all times.",
    heading: "05  Management & Optimisation",
  },
  {
    desc: "Stay updated on all updates and developments as your project progresses. We not only do this to show the value we are bringing to the table but to display accountability, integrity and promote continuous improvement.",
    heading: "06  Reporting",
  },
];

export default function MyWork() {
  return (
    <SectionWrapper
      service="Google Search Ads"
      steps={steps_1}
      listItems={listItems_1}
    />
  );
}
