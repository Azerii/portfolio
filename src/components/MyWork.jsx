import { digifigs_snap, blunch_snap, postpaddy_snap } from "../assets";
import SectionWrapper from "./SectionWrapper";


const steps_1 = [
  {
    href: "#",
    step: "Digifigs Landing pages",
  },
  {
    href: "#",
    step: "Blunch",
  },
  {
    href: "#",
    step: "Post Paddy",
  },
  
];

const listItems_1 = [
  {
    snap: digifigs_snap,
    bg: "#fff",
    heading: "Digifigs Landing pages",
    objective:
      "Digifigs Ltd aimed at being more visible, available to be of servive to any profession and easy to work with which resulted into well built online stage to showcase all these to potential clients and beneficiaries.",
    role: "Build out the individual UI components, work with my team members to assemble them according to the design specifications",
    link: "https://www.digifigs-website.vercel.app/",
    tags: ["React", "Styled components"],
  },

  {
    snap: blunch_snap,
    bg: "#0d2b5710",
    heading: "Blunch",
    objective:
      "Blunch is a food vendor app aimed at making life easy in ordering of well prepared breakfast and lunch. The app also makes it possible to make payment as it validates order.",
    role: "Build out the individual UI components, working with my team members to assemble them according to the design specifications",
    link: "https://www.blunch.ng",
    tags: ["React", "Styled components"],
  },

  {
    snap: postpaddy_snap,
    bg: "#0d2b5710",
    heading: "Post Paddy",
    objective:
      "PostPaddy goals are creating and scheduling of posts to multiple social media platforms seamlessly. It supports an overview of your scheduled post before it goes live and make changes if necessary",
    role: "Build out the individual UI components, work with my team members to assemble them according to the design specifications",
    link: "https://www.postpaddy.com",
    tags: ["React", "Redux", "Styled components", "Sass"],
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
