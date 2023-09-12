export const NAV_LINKS = {
  CONTACT: "#contact",
  ABOUT: "#about",
  PROJECTS: "#projects",
  SKILLS: "#skills",
  HOME: "/",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/hebb00",
  twitter: "https://twitter.com/Hebbs50",
};

export const skills: [string, string, string, number, number][] = [
  [
    "/tech/css.svg",
    "I am highly skilled in utilizing CSS to create visually captivating web pages and enhance the overall user experience.",
    "CSS",
    900,
    3,
  ],
  [
    "/tech/py.svg",
    "I have advanced proficiency in utilizing Python libraries such as pandas, matplotlib, and numpy.",
    "PYTHON",
    950,
    4,
  ],
  [
    "/tech/git.svg",
    "I possess a strong proficiency in Git, adeptly managing code changes, fostering collaboration with team members, and proficiently resolving conflicts.",
    "GIT",
    980,
    5,
  ],
  [
    "/tech/github.svg",
    "I possess advanced skills in utilizing GitHub for streamlined project collaboration, code sharing, and issue tracking. With GitHub, I proficiently create and manage repositories, enabling me to effectively showcase my work to prospective employers.",
    "GITHUB",
    990,
    8,
  ],
  [
    "/tech/html.svg",
    "I have a strong command of HTML, which enables me to efficiently organize web pages and generate meaningful content accessible to all users.",
    "HTML",
    1000,
    9,
  ],
  [
    "/tech/java.svg",
    "I possess vast experience in the utilization of Java for object-oriented programming (OOP) and implementation of data structures.",
    "JAVA",
    900,
    3,
  ],
  [
    "/tech/javascript.png",
    "I possess extensive experience in utilizing JavaScript to implement interactivity and functionality within web pages, thereby creating dynamic user interfaces.",
    "JAVASCRIPT",
    900,
    4,
  ],
  [
    "/tech/react.svg",
    "I possess extensive knowledge and expertise in React, demonstrating proficiency in creating reusable components and effectively managing application state using hooks and context.",
    "REACT",
    900,
    5,
  ],
  [
    "/tech/vite.svg",
    "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
    "VITE",
    800,
    8,
  ],
  [
    "/tech/postgresql.svg",
    "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
    "POSTGRESQL",
    1000,
    9,
  ],
  [
    "/tech/nodejs.svg",
    "I have a preference for utilizing Node.js as my runtime environment when developing web applications. My expertise lies in leveraging Node.js to create robust and scalable web applications.",
    "NODE",
    1000,
    10,
  ],
];
export interface Props {
  title: string;
  description: string;
  img: string;
  gitLink: string;
  demo:string;
  tech:string[];
}

export const projectsInfo:Props[] = [
  {
    title: "Transport dashboard",
    description: "Developing an accessible management system for operators, improving the visualization and car booking process, setting up an interactive and flexible calendar that allows visualizing availability and creating car reservations within the available timeframe.",
    img:"/projects/transport.png",
    gitLink:"",
    demo:"",
    tech:['TYPESCRIPT','REACT','VITE','POSTGRESQL','EXPRESS']
},
  {
   title: "Hackathon page",
   description: "Creating and implementing a hackathon landing page, encompassing the design process including theme development and utilizing AI technology to generate visually appealing images.",
   img: "/projects/hack.png",
   gitLink: "",
   demo:"",
   tech:['HTML','CSS']
},
  {
   title: "Sandbox projects page",
   description: "Miagrate the website from hugo to nextra. Designning and implementing a Sandbox projects page along with hackathon page",
   img: "/projects/sandbox.png",
   gitLink: "https://github.com/hebb00/hebb00.github.io/tree/main",
   demo:"https://opendatacommunity.org/projects",
   tech:['TYPESCRIPT','REACT','NEXTJS']
  },
    {
     title: "Rounds dashboard",
     description:"The web application features a comprehensive rounds dashboard that highlights the number of projects per round and their corresponding status. It includes a table that showcases projects along with their respective rounds. Additionally, the web app offers a filtering functionality to facilitate project filtering based on their status.",
     img: "/projects/round.png",
     gitLink: "",
     demo:"https://rounds-dashboard.on.fleek.co/",
     tech:['TYPESCRIPT','REACT','VITE', 'MUI']
},

];

export const heroOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#B3B3B3"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 0.2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 950, 
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: "none",
      random: true,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 150,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true 
};
