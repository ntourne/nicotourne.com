import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaJsSquare,
  FaNetworkWired,
} from "react-icons/fa";

export const PROFILE = {
  name: "Nicolas Tourne",
  title: "Software Engineer",
  about: `
Experience on creating and managing highly technical web/mobile applications & development teams spanning multiple projects and platforms. Full Stack Engineer with a solid experience on front-end and back-end technologies. Right now he is moving to Blockchain/Web3 space.

Also, he is a Software Engineer and MBA.
`,
  avatarUrl: "/img/about/profile-avatar.jpeg",
};

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
    label: "Twitter",
    url: "https://twitter.com/nicotourne",
    icon: <FaTwitter />,
  },
];

export const EXPERIENCES = [
  {
    key: "beereal-cto",
    imageUrl: "/img/experiences/beereal.jpeg",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQEn9Sykc3svVA/company-logo_100_100/0/1560072065981?e=1648684800&v=beta&t=E_31bF4yC8_lttrtUrwGsUzkRj7v56eLiWpAvUZtfdM",
    title: "CTO & Co-founder",
    company: {
      name: "BeeReal",
      url: "https://beerealit.com",
      location: "UK, Spain, Argentina",
    },
    period: {
      start: "Aug 2012",
      end: "Present",
    },
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
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQEApmbg0PyCfg/company-logo_200_200/0/1519856522119?e=1648684800&v=beta&t=wNB01xuk53yXxUHsUMMl6mff6CrlSVzMwGzDlX5O66Q",
    title: "University Professor",
    company: {
      name: "Universidad Nacional del Centro de la Pcia de Buenos Aires",
      url: "https://www.unicen.edu.ar/",
      location: "Argentina",
    },
    period: {
      start: "Oct 2017",
      end: "Present",
    },
    description: `
Nicolas participates as teacher of different topics at UNICEN.
    
**Technology Trends @ Licenciatura en Gestión Tecnológica** (Aug 2021 - Present)

This is a subject at the Economics degree. He had to research about different topics related to A.I. and robotics, fintech, blockchain and bitcoin, IoT, etc

[https://www.econ.unicen.edu.ar](https://www.econ.unicen.edu.ar/carreras-grado/11070-licenciatura-en-gestion-tecnologica-.html)

**FrontEnd Development @ Diplomatura de User Experience** (Oct 2017 - Dec 2020)

Nicolas is in charge of the module of "FrontEnd Development" in the Digital User Experience's career @ UXDI.
Different subjects are discussed in this module but always with a technical approach. For example: Difference between Visioning & Delivery, Web & Mobile technologies, Accessibility, A/B Testing, Web Analytics, etc.

[https://uxdi.exa.unicen.edu.ar/](https://uxdi.exa.unicen.edu.ar/)
    `,
  },
  {
    key: "tidymktr-cto",
    imageUrl: "/img/experiences/tidymarketer.jpeg",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQEKJ9WsDBBKqw/company-logo_100_100/0/1519911191061?e=1648684800&v=beta&t=hC8x2Ju0kBJcvHUi4LwVZmEe8WOQVP6v9msvIxw1XQE",
    title: "CTO & Co-founder",
    company: {
      name: "TidyMarketer",
      url: "https://www.youtube.com/watch?v=Jok0wo13cD4",
      location: "San Francisco, CA",
    },
    period: {
      start: "May 2015",
      end: "Dec 2016",
    },
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
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFqwiPE-Y6uhw/company-logo_100_100/0/1625178440348?e=1648684800&v=beta&t=4evQBnIGqbYUMsjqS69apzD5qyJHtBhspgRj9_5hWBc",
    title: "Team Leader",
    company: {
      name: "Lending Club - Scale Options contractor",
      url: "https://www.lendingclub.com",
      location: "Shenzhen, China",
    },
    period: {
      start: "Oct 2010",
      end: "Nov 2010",
    },
    description: `
Working at Scale Options - a company which offers consulting to the biggest social peer lending company from the US, LendingClub (NYSE: LC).

Nicolás moved to China to manage and give training/knowledge transfer to a new team of 6 people. The main task was to overcome the different working modes between China and US, having in mind a rapid transition.
    `,
  },
  {
    key: "temperies-projectleader",
    imageUrl: "/img/experiences/temperies.jpeg",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQG1IncxXPqgUQ/company-logo_100_100/0/1519902150805?e=1648684800&v=beta&t=PqCR-m_tf118VuYoI2U-ZTlstJCezsY4SVl4C3UcKII",
    title: "Project Leader & Full Stack Developer",
    company: {
      name: "Temperies",
      url: "http://temperies.com/",
      location: "Argentina",
    },
    period: {
      start: "Jul 2019",
      end: "Jul 2012",
    },
    description: `
Temperies is an IT company, specialized in both consulting and software developing areas. Work position: Database department leader. Team leader/software developer in Java/PHP-based projects. At the database department, Nicolas has the responsibility to organize not only the team but also the training plan of the company, evaluate new projects, offers internal consulting and researching about different approach like Big Data and NoSQL databases.
He worked on the management and development process from various projects based on PHP and Java technologies.

Also, working for Lending Club (NYSE:LC). Lending Club is a person-to-person lending website that pairs borrowers and lenders through a matching system that combines a search algorithm, credit decisioning and social networking. Lending Club is headquartered in Sunnyvale, California. Check it out at [http://www.lendingclub.com](http://www.lendingclub.com)

Technologies: J2EE / Struts / JSP-Javascript-YUI / Oracle
    `,
  },
  {
    key: "buscarg-founder",
    imageUrl: "/img/experiences/buscarg.jpeg",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQFKydEjiSytDQ/company-logo_100_100/0/1519886485385?e=1648684800&v=beta&t=GavdpSSVB3f7DCJPMydseslpelfq5CZEYJ55Dz9maM0",
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
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQGGgMtFiHD_gw/company-logo_100_100/0/1519890082941?e=1648684800&v=beta&t=aANyTEmu1ZxXl52qFgic7JTeVc7RrtmodxwnUzIJkDE",
    title: "Team Leader and Software Developer",
    company: {
      name: "IntelligenX",
      url: "https://intelligenx.com/",
      location: "Reston, VA, United States",
    },
    period: {
      start: "Jan 2007",
      end: "Jul 2008",
    },
    description: `
Working at different projects in the company.
    
**Team Leader of 411.ca, Canada's company.**

411.ca is a Canadian online directory services. The business directory combines rich content gathered from numerous sources (including directly from companies themselves) with ultra-targeted search tools to deliver unparalleled utility and a truly unique user experience. Check it out at [http://www.411.ca](http://www.411.ca)

Technologies: J2EE / JSP-Smarty-Javascript-CSS / PHP-MySQL

**Admin Dashboard project**

It's the underlying distributed management framework and administrative tools and functions associated with Discovery Engine. It is responsible for control and manage the different servers are part of Discovery Engine

Technologies: J2EE / JavaServer Faces
    `,
  },
];

export const EDUCATION = [
  {
    key: "unicen-mba",
    imageUrl: "/img/education/unicen.jpeg",
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQEApmbg0PyCfg/company-logo_100_100/0/1519856522119?e=1648684800&v=beta&t=Z_znapWe-8S_0rjSwY38CGA_qmbyAIJ3I_uQFZ6vPGU",
    degree: "System Engineering",
    school: {
      name: "Universidad Nacional del Centro de la Pcia de Buenos Aires",
      url: "",
    },
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
    image:
      "https://media-exp1.licdn.com/dms/image/C560BAQEApmbg0PyCfg/company-logo_100_100/0/1519856522119?e=1648684800&v=beta&t=Z_znapWe-8S_0rjSwY38CGA_qmbyAIJ3I_uQFZ6vPGU",
    degree: "System Engineering",
    school: {
      name: "Universidad Nacional del Centro de la Pcia de Buenos Aires",
      url: "",
    },
    period: {
      start: "2002",
      end: "2011",
    },
    description: `
Thesis: "Web Pages Classification using Social Bookmarks"

Paper: [https://www.sciencedirect.com/science/article/abs/pii/S0957417412003326](https://www.sciencedirect.com/science/article/abs/pii/S0957417412003326)
`,
  },
];

export const SKILLS = [
  {
    icon: <FaJsSquare />,
    label: "Web Full Stack",
    description: "Development of web applications using MERN and MEAN stacks.",
    technologies: [
      "JavaScript / TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Node / Express",
      "MySQL / MongoDB / Firestore",
      "Serverless",
    ],
  },
  {
    icon: <FaNetworkWired />,
    label: "Blockchain / Web3",
    description:
      "Development of Web3 applications working on web interfaces and smart contracts.",
    technologies: ["Solidity", "hardhat / truffle", "ethers.js / web3.js"],
  },
];

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
];
