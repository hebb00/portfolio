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
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "#hero",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#repulse-span",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#togglebutton",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        {
          selectors: "#scroller",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 350,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 0.4,
        size: 40,
        color: {
          value: "#cbbde5",
        },
        opacity: 8,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "fff",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      direction: ["top-left", "bottom-left", "bottom-right", "top-right"],
      drift: 0,
      enable: true,
      random: false,
      size: false,
      speed: 0.8,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 30,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.4,
        maxValue: 0.6,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "character",
      character: [
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf13b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf38b"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf3b9"],
          weight: "400",
        },
        {
          fill: true,
          font: "Font Awesome 6 Brands",
          style: "",
          value: ["\uf41b"],
          weight: "400",
        },
      ],
    },

    size: {
      random: {
        enable: true,
        minimumValue: 25,
        maxValue: 35,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: "#ffffff",
      },
      consent: true,
      distance: 100,
      enable: true,
      frequency: 10,
      opacity: 0.4,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
