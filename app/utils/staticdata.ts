import { GoHome } from "react-icons/go";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NavItems = [
  {
    id: 1,
    title: "Home",
    link: "#",
    icon: GoHome
  },
  {
    id: 2,
    title: "Experience",
    link: "#",
    icon: LuUserCog
  },
  {
    id: 3,
    title: "Projects",
    link: "#",
    icon: MdOutlineWorkOutline
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
    icon: CiPhone
  }
];

export const SocialMediaItems = [
  {
    id: 1,
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/ballalaxman"
  },
  {
    id: 2,
    name: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/balla-laxman-rao/"
  },
  {
    id: 3,
    name: "Twitter",
    icon: FaXTwitter,
    url: "https://x.com/laxman_balla_"
  },
  {
    id: 4,
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/laxmanballa/"
  }
];

export const WielabsFulltimeTechStack = [
  "Javascript",
  "React Js",
  "Next Js",
  "Redux-toolkit",
  "Tailwind Css",
  "Material UI",
  "Styled-components",
  "Axios"
];

export const WielabsInternshipTechStack = [
  "Javascript",
  "React Js",
  "Axios",
  "Firebase",
  "Sass",
  "Material UI"
];
