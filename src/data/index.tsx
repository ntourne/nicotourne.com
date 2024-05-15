import { FaLinkedin, FaGithub, FaJsSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { BiNetworkChart } from "react-icons/bi"

export const PROFILE = {
  name: "Nicolas Tourne",
  title: "Web3 Engineer (and curious)",
  about: `
  Hey 👋  Thanks for visiting my website.

I'm a software engineer with experience in creating and managing highly technical web applications and development teams across multiple projects and platforms.

CTO and Co-Founder at [BeeReal](https://beerealit.com), a digital agency focused on scalable and user-friendly products. At BeeReal, I have worked with many different companies, helping them to launch their digital products from vision to delivery.

Currently, I'm working as a Web3 engineer at [Tally](https://www.tally.xyz), which is a platform for onchain decentralized organizations (DAOs).

In the past, I co-founded [TidyMktr](https://www.youtube.com/watch?v=Jok0wo13cD4&ab_channel=LAUNCHConf), a digital marketing SaaS tool that was incubated by LAUNCH Incubator, and [Buscarg](https://twitter.com/buscarg), a business directory site.

Additionally, I am a Software Engineer with an MBA from UNICEN and a university professor. I am currently based in Argentina 🇦🇷
  `,
  avatarUrl: "/img/about/profile-avatar.jpeg",
  email: "nicotourne@gmail.com",
}

export const SOCIAL_MEDIA = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/nicolastourne/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    url: "https://github.com/ntourne",
    icon: <FaGithub />,
  },
  {
    label: "X (Twitter)",
    url: "https://x.com/nicotourne",
    icon: <FaXTwitter />,
  },
]

export const EXPERIENCES = [
  {
    key: "beereal-cto",
    imageUrl: "/img/experiences/beereal.jpeg",
    title: "CTO & Co-founder",
    company: {
      name: "BeeReal",
      location: "UK, Spain, Argentina",
    },
    period: {
      start: "Aug 2012",
      end: "Present",
    },
    websites: [{ label: "beerealit.com", url: "https://beerealit.com" }],
    description: `
BeeReal is a digital agency focused on Software Development and UX Design. It works with many different companies helping them to launch their digital products since visioning up-to delivery.

He is responsible for the information technology and computer systems that support strategic goals for the organization. His daily tasks include executing challenging projects, managing top performers teams, evaluating opportunities from business point-of-view and researching on latest trends.

Also, Nicolas has led many projects and participated as main architect/full stack developer.

His main goal is to continue to position BeeReal as an innovation company.
    `,
  },
  {
    key: "university-professor",
    imageUrl: "/img/experiences/unicen.jpeg",
    title: "University Professor",
    company: {
      name: "Universidad Nacional del Centro de la Pcia de Buenos Aires",
      location: "Argentina",
    },
    period: {
      start: "Oct 2017",
      end: "Present",
    },
    websites: [
      { label: "econ.unicen.edu.ar", url: "https://www.econ.unicen.edu.ar/" },
      {
        label: "uxdi.exa.unicen.edu.ar",
        url: "https://uxdi.exa.unicen.edu.ar/",
      },
    ],
    description: `
Nicolas participates as a teacher of different topics at UNICEN.
    
**Technology Trends @ Licenciatura en Gestión Tecnológica** (Aug 2021 - Present)

This is a subject for an Economics degree. He had to research different topics related to A.I. and robotics, fintech, blockchain and bitcoin, IoT, etc

**FrontEnd Development @ Diplomatura de User Experience** (Oct 2017 - Dec 2020)

Nicolas is in charge of the module of "FrontEnd Development" in the Digital User Experience's career @ UXDI.
Different subjects are discussed in this module but always with a technical approach. For example: Difference between Visioning & Delivery, Web & Mobile technologies, Accessibility, A/B Testing, Web Analytics, etc.
    `,
  },
  {
    key: "tidymktr-cto",
    imageUrl: "/img/experiences/tidymarketer.jpeg",
    title: "CTO & Co-founder",
    company: {
      name: "TidyMarketer",
      location: "San Francisco, CA",
    },
    period: {
      start: "May 2015",
      end: "Dec 2016",
    },
    websites: [
      {
        label: "LAUNCH Festival 2016",
        url: "https://www.youtube.com/watch?v=Jok0wo13cD4",
      },
    ],
    description: `
TidyMarketing is a B2B SaaS company based in San Francisco, CA. It got funding from angel investors like Jason Calacanis.

It is the first smart media plan builder and campaign calendar management tool built by and for marketers.

Nicolas was in charge of the design and construction of the web application.

Update: This company was shutted down.
    `,
  },
  {
    key: "lendingclub-teamleader",
    imageUrl: "/img/experiences/lending-club.jpeg",
    title: "Team Leader",
    company: {
      name: "Lending Club - Scale Options contractor",
      location: "Shenzhen, China",
    },
    period: {
      start: "Oct 2010",
      end: "Nov 2010",
    },
    websites: [
      { label: "lendingclub.com", url: "https://www.lendingclub.com/" },
    ],
    description: `
Working at Scale Options - a company which offers consulting to the biggest social peer lending company from the US, LendingClub (NYSE: LC).

Nicolás moved to China to manage and give training/knowledge transfer to a new team of 6 people. The main task was to overcome the different working modes between China and the US, having in mind a rapid transition.
    `,
  },
  {
    key: "temperies-projectleader",
    imageUrl: "/img/experiences/temperies.jpeg",
    title: "Project Leader & Full Stack Developer",
    company: {
      name: "Temperies",
      location: "Argentina",
    },
    period: {
      start: "Jul 2009",
      end: "Jul 2012",
    },
    websites: [{ label: "temperies.com", url: "http://temperies.com/" }],
    description: `
Temperies is an IT company, specialized in both consulting and software developing areas. Work position: Database department leader. Team leader/software developer in Java/PHP-based projects. At the database department, Nicolas has the responsibility to organize not only the team but also the training plan of the company, evaluate new projects, offer internal consulting and research about different approaches like Big Data and NoSQL databases.
He worked on the management and development process from various projects based on PHP and Java technologies.

Also, working for Lending Club (NYSE:LC). Lending Club is a person-to-person lending website that pairs borrowers and lenders through a matching system that combines a search algorithm, credit decisioning and social networking. Lending Club is headquartered in Sunnyvale, California.

Technologies: J2EE / Struts / JSP-Javascript-YUI / Oracle
    `,
  },
  {
    key: "buscarg-founder",
    imageUrl: "/img/experiences/buscarg.jpeg",
    title: "Co-founder & Principal Developer",
    company: {
      name: "Buscarg",
      location: "Argentina",
    },
    period: {
      start: "May 2009",
      end: "Feb 2011",
    },
    description: `
Buscarg was a business directory (yellow pages) from Argentina with similar functionalities as Yelp. He created the website application, integrated with 3rd party systems to populate its database and did some basic digital marketing.

Technologies: PHP, MySQL, Zend Framework, Smarty.

Update: This company was shutted down.
    `,
  },
  {
    key: "intelligenx-teamleader",
    imageUrl: "/img/experiences/intelligenx.jpeg",
    title: "Team Leader and Software Developer",
    company: {
      name: "IntelligenX",
      location: "Reston, VA, United States",
    },
    period: {
      start: "Jan 2007",
      end: "Jul 2008",
    },
    websites: [
      { label: "intelligenx.com", url: "https://intelligenx.com/" },
      { label: "411.ca", url: "https://411.ca/" },
    ],
    description: `

    IntelligenX is a US company which offers consulting & development to yellow pages companies around the world. Nicolas worked at different projects in the company.
    
**Team Leader of 411.ca, Canada's company.**

411.ca is a Canadian online directory services. The business directory combines rich content gathered from numerous sources (including directly from companies themselves) with ultra-targeted search tools to deliver unparalleled utility and a truly unique user experience.

Technologies: J2EE / JSP-Smarty-Javascript-CSS / PHP-MySQL

**Admin Dashboard project**

It's the underlying distributed management framework and administrative tools and functions associated with Discovery Engine. It is responsible for control and manage the different servers are part of Discovery Engine

Technologies: J2EE / JavaServer Faces
    `,
  },
]

export const EDUCATION = [
  {
    key: "unicen-mba",
    imageUrl: "/img/education/unicen.jpeg",
    degree: "MBA",
    school: {
      name: "Universidad Nacional del Centro de la Pcia de Buenos Aires",
    },
    websites: [
      {
        label: "econ.unicen.edu.ar/mba",
        url: "https://econ.unicen.edu.ar/mba/",
      },
    ],
    period: {
      start: "2014",
      end: "2019",
    },
    description: `
Thesis: "Microblogging Investor Sentiment as a Contrarian Indicator in Stock Markets"
`,
  },
  {
    key: "unicen-soft-engineer",
    imageUrl: "/img/education/unicen.jpeg",
    degree: "System Engineering",
    school: {
      name: "Universidad Nacional del Centro de la Pcia de Buenos Aires",
    },
    websites: [
      { label: "exa.unicen.edu.ar", url: "https://exa.unicen.edu.ar/" },
      {
        label: "White Paper",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0957417412003326",
      },
    ],
    period: {
      start: "2002",
      end: "2011",
    },
    description: `
Thesis: "Web Pages Classification using Social Bookmarks"
`,
  },
]

export const SKILLS = [
  {
    icon: <FaJsSquare />,
    label: "Web Full Stack",
    description:
      "Development of web applications using MERN and MEAN stacks. Experience in all the phases of a digital product since the discovery (interacting with customers and UX designers) and delivery (architecture definition, development and release to production). Most of the time playing the tech lead role.",
    technologies: [
      "JavaScript / TypeScript",
      "React",
      "Next.js",
      "Node.js / Express.js",
      "SQL / MySQL / MongoDB / Firestore",
      "RESTful APIs",
      "Jest",
      "GCP / Heroku / Vercel / Firebase",
      "Chakra UI / Tailwind CSS",
    ],
  },
  {
    icon: <BiNetworkChart />,
    label: "Blockchain / Web3",
    description:
      "Development of Web3 applications working on web interfaces and smart contracts on EVM (Ethereum). Interested in the NFT ecosystem and the impact it can have in many industries.",
    technologies: [
      "Solidity",
      "hardhat / truffle",
      "ethers.js / web3.js",
      "OpenZeppelin",
    ],
  },
]

export const LANGUAGES = [
  {
    key: "lang-spanish",
    label: "Spanish",
    description: "Native or bilingual proficiency",
  },
  {
    key: "lang-english",
    label: "English",
    description: "Full professional proficiency",
  },
  {
    key: "lang-portuguese",
    label: "Portuguese",
    description: "Elementary proficiency",
  },
]
