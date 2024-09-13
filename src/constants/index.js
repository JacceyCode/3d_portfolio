import {
  backend,
  bank,
  blog,
  careplus,
  creator,
  css,
  dmarketplace,
  docker,
  eumla,
  git,
  html,
  javascript,
  jest,
  mobile,
  mongodb,
  moviebox,
  natours,
  nextjs,
  nodejs,
  oasisclt,
  oasismgt,
  pizza,
  postgresql,
  qiminvest,
  reactjs,
  seron,
  tailwind,
  typescript,
  web,
  apple,
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
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
    icon: web,
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
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "React Native",
  //   icon: reactnative,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Zustand",
  //   icon: zustand,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Express JS",
  //   icon: express,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  // {
  //   name: "Supabase",
  //   icon: supabase,
  // },
  // {
  //   name: "Appwrite",
  //   icon: appwrite,
  // },
  // {
  //   name: "Redis",
  //   icon: redis,
  // },
  // {
  //   name: "GSAP",
  //   icon: gsap,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Github Actions",
  //   icon: gitactions,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "VS Code",
  //   icon: vscode,
  // },
];

const experiences = [
  // {
  //   title: "FullStack Developer",
  //   company_name: "TraderApp - Remote",
  //   icon: meta,
  //   iconBg: "#383E56",
  //   date: "July 2024 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "FullStack Developer",
    company_name: "Eumla - Remote",
    icon: eumla,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Qim Invest - Remote",
    icon: qiminvest,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    points: [
      "Collaborated with in-house designer and product manager to build a new responsive website and implemented standard SEO practices to enhance company's digital presence.",
      "Developed high-performance RESTful APIs handling an average of 5,000 requests per minute, improving data retrieval speed and enhancing overall application responsiveness for end-users.",
      "Developed the company’s first mobile application, ensuring a seamless user experience and functionality.",
      "Regular validation of data integrity and security protocols, reducing system failure by 65%.",
      "Engineered a code review system, improving both code quality and development time by 30%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CarePlus+",
    description:
      "A healthcare self-management system that allows users to schedule medical appointments. It addresses issues like long wait times, avoid scheduling conflicts, and eliminate the need for rescheduling due to physician unavailability.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "sentry",
        color: "orange-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: careplus,
    source_code_link: "https://github.com/JacceyCode/careplus",
    live_demo: "https://care-plus-pi.vercel.app",
  },
  {
    name: "OneClick Finance",
    description:
      "A modern app for managing financial transactions and budgets, providing instant access to multiple accounts from one platform.",
    tags: [
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "plaid",
        color: "blue-text-gradient",
      },
      {
        name: "dwolla",
        color: "orange-text-gradient",
      },
      {
        name: "sentry",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/JacceyCode/finance",
    live_demo: "https://bank-on-the-go.vercel.app",
  },
  {
    name: "SeronEstate App",
    description:
      "An estate management app that allows for sale, purchase or rent of apartments with a chat feature for easy communication among users.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "leaflet map",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "jwtoken",
        color: "green-text-gradient",
      },
      {
        name: "socket-io",
        color: "blue-text-gradient",
      },
    ],
    image: seron,
    source_code_link: "https://github.com/JacceyCode/estate-app",
    live_demo: "https://seron-estate-app.vercel.app",
  },
  {
    name: "Oasis",
    description:
      "An app developed for tourist's to book cabin accommodation of their choice before a scheduled visit to the tourist centre.",
    tags: [
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "nextauth",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: oasisclt,
    source_code_link:
      "https://github.com/JacceyCode/the-wild-aosis-client-website",
    live_demo: "https://the-wild-aosis-client-website.vercel.app",
  },
  {
    name: "Apple iPhone 15 Pro",
    description:
      "Experience the cutting-edge innovation of the Apple iPhone 15 Pro with a stunning titanium frame and the most advanced A17 Bionic chip for unparalleled performance.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "blue-text-gradient",
      },
      {
        name: "react_three_fiber",
        color: "pink-text-gradient",
      },
      {
        name: "sentry",
        color: "orange-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/JacceyCode/apple",
    live_demo: "https://apple-motion-page.vercel.app",
  },
  {
    name: "E-Blog App",
    description:
      "A platform enabling writers to publish creative works for avid readers to engage with and provide valuable feedback.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "jwtoken",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/JacceyCode/blog-site",
    live_demo: "https://jacceyblog.netlify.app",
  },
  {
    name: "D-MarketPlace",
    description:
      "An online e-commerce store incorporating a seamless payment gateway, user account management, authentication, and an intuitive cart system.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: dmarketplace,
    source_code_link: "https://github.com/JacceyCode/themarketplace",
    live_demo: "https://dmarketplace.netlify.app",
  },
  {
    name: "Natours",
    description:
      "A travel application designed and deployed to enthrall travel enthusiasts by showcasing different tourist attractions, facilitating exploration, reservation, and secure payments.",
    tags: [
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "pug",
        color: "pink-text-gradient",
      },
      {
        name: "jwtoken",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/JacceyCode/Natours",
    live_demo: "https://mynatours-3ltq.onrender.com",
  },
  {
    name: "Oasis Management App",
    description:
      "An app developed for a resort to strategically prioritize customer management and reservations. With a glance on the app's dashboard, every customer's details and preferences can be gotten at the click of a finger.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "styled_components",
        color: "green-text-gradient",
      },
      {
        name: "recharts",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: oasismgt,
    source_code_link: "https://github.com/JacceyCode/the-wild-oasis",
    live_demo: "https://the-wild-oasis-vacation-house.netlify.app",
  },
  {
    name: "MovieBox",
    description:
      "A website built for movie lover's to checkout the latest movie trends, see reviews and have a sneak peek of the trailer before hitting the cinema.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "tmdb_api",
        color: "pink-text-gradient",
      },
    ],
    image: moviebox,
    source_code_link: "https://github.com/JacceyCode/HNGxStage2Task",
    live_demo: "https://mymoviestreambox.netlify.app",
  },
  {
    name: "Pizza Hub",
    description:
      "A website built for pizza lover's, providing a seamless ordering, delivery management and payment experience from the comfort of their homes. This helps to increase the pizza order rate per hour and improve the sales number at least by 40% for the company.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/JacceyCode/fast-react-pizza",
    live_demo: "https://orderfastpizza.netlify.app",
  },
];

export { experiences, projects, services, technologies, testimonials };
