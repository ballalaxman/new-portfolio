import { GoHome } from "react-icons/go";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import moviehunt from "../../public/moviehunt.png";
import blogapp from "../../public/blogapp.png";

export const NavItems = [
  {
    id: 1,
    title: "Home",
    link: "#home",
    icon: GoHome
  },
  {
    id: 2,
    title: "Experience",
    link: "#experience",
    icon: LuUserCog
  },
  {
    id: 3,
    title: "Projects",
    link: "#projects",
    icon: MdOutlineWorkOutline
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact",
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

export const projects = [
  {
    id: 1,
    name: "Moviehunt",
    image: moviehunt,
    techStack: ["React Js", "Material UI", "Axios", "Aos"],
    description:
      "Moviehunt is a application to show the movies and it&apos;s details like rating, streaming platform and overview. It is implemented using free api provided by TMDB.",
    liveUrl: "https://moviehunt-app.netlify.app/",
    githubUrl: "https://github.com/ballalaxman/moviehunt"
  },
  {
    id: 2,
    name: "Blog App",
    image: blogapp,
    techStack: [
      "React Js",
      "ExpressJS",
      "Mongo DB",
      "flowbite-react",
      "Tailwind"
    ],
    description:
      "Our Blog App is a dynamic and user-friendly platform designed using React.js for the frontend, Express.js for the backend, and MongoDB for the database. It offers a seamless experience for both readers and writers of blog content.",
    liveUrl: "https://moviehunt-app.netlify.app/",
    githubUrl: "https://github.com/ballalaxman/blog-management-frontend"
  }
];
