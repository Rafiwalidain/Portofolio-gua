import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  jjk,
  pyt,
  abs,
  threejs,
  angkasapura,
  c,
  python,
  phpmyadmin,
  php,
  laravel,
  freelancer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Desaigner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "phpmyadmin",
    icon: phpmyadmin,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Departemen Airport Technology",
    company_name: "PT Angkasa Pura I",
    icon: angkasapura,
    iconBg: "#383E56",
    date: "December 2021 - April 2022",
    points: [
      "Handled troubleshooting for software, hardware, network systems, printers, and other work tools.",
      "Performed installation and configuration of client PCs and laptops.",
      "Assisted in network management, including LAN/WAN setup and switch configuration.",
      "Conducted routine maintenance, such as data backups and system updates.",
      "Provided technical support to clients through short training sessions and remote desktop assistance.",
      "Documented all tasks in accordance with established Standard Operating Procedures (SOPs).",
    ],
  },
  {
    title: "Designer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "June 2023 - Now",
    points: [
      "Created visual designs based on client requests using Canva and Adobe Photoshop.",
      "Designed digital assets including posters, social media content, and basic branding materials.",
      "Communicated directly with clients to gather feedback and perform revisions.",
      "Held virtual meetings to ensure the final design aligned with client expectations.",
    ],
  },
];

const projects = [
  {
    name: "Jujutsu Kaisen",
    description: "A responsive personal website that displays profile information, skills, and anime-style character cards with light animations. Designed to showcase UI/UX and front-end development skills.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: jjk,
    source_code_link: "https://github.com/Rafiwalidain/website-jjk",
  },
  {
    name: "Fastest Route A-Star",
    description: "A web application that calculates the fastest delivery route using the A* algorithm. Users enter a destination address, and the system generates a route map with street names and visual graphs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
    ],
    image: pyt,
    source_code_link: "https://github.com/Rafiwalidain/kcb-prog",
  },
  {
    name: "System Absensi",
    description: "A real-time web-based attendance system designed for both employees and admin. This system allows employees to check in and out, while admins can manage, approve attendance, and monitor daily activity logs.",
    tags: [
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: abs,
    source_code_link: "https://github.com/Rafiwalidain/Crud_Absensi",
  },
];

export { services, technologies, experiences, projects };
