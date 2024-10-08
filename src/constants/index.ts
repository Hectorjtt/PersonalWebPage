// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/Hectorjtt/PersonalWebPage",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Specialist",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Neoris Intern",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Ago 2022 - Dec 2022",
    points: [
      "Developed an integrated web application with both front-end and back-end components for seamless database interaction.",
      "Designed and launched an innovative platform that significantly improved employee engagement with training courses through gamification techniques.",
      "Created a dynamic system where course completion unlocked levels in a gamified experience, leading to a notable increase in course completion rates and enhanced employee motivation and performance.",
      "Implemented this creative solution, which not only boosted training participation but also contributed to a more engaged and high-performing workforce.",
    ],
  },
  {
    title: "Solsuof Intern",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Ago 2023",
    points: [
      "Designed and implemented an advanced accounting system that revolutionized the invoicing process, eliminating manual inefficiencies.",
      "Automated the billing workflow, reducing invoice generation time by 50% and significantly enhancing processing speed.",
      "Optimized financial operations and reporting, leading to a substantial improvement in overall operational efficiency and financial management.",
    ],
  },
  {
    title: "Hackaton Winner",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2024",
    points: [
      "Developed an iOS finance app during a hackathon, enabling users to compare personal loan options based on their profiles and loan details.",
      "Implemented an admin web interface for bank personnel to manage bank information, add new banks, and edit interest rates, ensuring data accuracy.",
      "Simplified the process of finding the best bank options for loans, enhancing user experience through personalized loan comparisons.",
      "Demonstrated innovation and adaptability by delivering a functional solution in a fast-paced hackathon environment, addressing real-world financial challenges",
    ],
  },
  {
    title: "CapitalOne",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2024",
    points: [
      "Developed an advanced iOS application designed to help users effectively manage personal finances, track expenses, and compare credit options from multiple Mexican banks in real-time.",
      "Created a dynamic credit simulator that evaluates loan offers by calculating key financial metrics, such as interest rates, monthly payments, and loan terms, providing users with tailored loan recommendations based on their financial profile.",
      "Implemented a comprehensive notification system that proactively alerts users of favorable changes in bank interest rates and loan offers, ensuring they have access to the best financial opportunities available in Mexico.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Neoris",
    description:
      "A web application for Neoris employees to access training courses, incorporating a gaming element for unlocking courses. Full-stack development with Firebase Firestore as the backend. ",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Hectorjtt/NeorisIntership",
    live_site_link: "https://thunderous-haupia-cb7855.netlify.app/login.html",
  },
  {
    name: "Arca Continental",
    description:
      "A web application for Arca Continental to optimize website promotions using machine learning, enhancing customer engagement and increasing promotion effectiveness.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Hectorjtt/Hack-ArcaContinental",
    live_site_link: "https://github.com/Hectorjtt/Hack-ArcaContinental",
  },
  {
    name: "Wise Credit",
    description:
      "Developed a comprehensive iOS application for Capital One that enables users to manage personal finances, track expenses, and compare real-time credit options from multiple Mexican banks, featuring a dynamic credit simulator and personalized notifications—all built single-handedly.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Fireabse",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Hectorjtt/CapitalOne",
    live_site_link: "https://github.com/Hectorjtt/CapitalOne",
  },
  {
    name: "Netflix Clone",
    description:
      "Developed a fully functional Netflix clone using JavaScript, HTML, and CSS, featuring a dynamic user interface that allows users to browse, search, and stream a curated selection of movies and TV shows. The project includes interactive carousels, responsive design for multiple devices, and smooth user navigation, mimicking the core features of the original platform—all developed single-handedly from scratch",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Hectorjtt/Netflix-Clone",
    live_site_link: "https://github.com/Hectorjtt/Netflix-Clone",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/héctor-jesús-tamez-treviño-638a74280/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/hectorjtt",
  },
] as const;
