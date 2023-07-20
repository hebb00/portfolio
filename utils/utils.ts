export const NAV_LINKS = {
  CONTACT: "/contact",
  ABOUT: "/about",
  PROJECTS: "/projects",
  SKILLS: "/skills",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/hebb00",
  twitter: "https://twitter.com/Hebbs50",
};

export const skills: [string, string, string][] = [
  [
    "/tech/css.png",
    "I am highly skilled in utilizing CSS to create visually captivating web pages and enhance the overall user experience.",
    "CSS"
  ],
  [
    "/tech/py.png",
    "I have advanced proficiency in utilizing Python libraries such as pandas, matplotlib, and numpy.",
    "PYTHON"
  ],
  [
    "/tech/git.png",
    "I possess a strong proficiency in Git, adeptly managing code changes, fostering collaboration with team members, and proficiently resolving conflicts.",
    "GIT"
  ],
  [
    "/tech/github.png",
    "I possess advanced skills in utilizing GitHub for streamlined project collaboration, code sharing, and issue tracking. With GitHub, I proficiently create and manage repositories, enabling me to effectively showcase my work to prospective employers.",
    "GITHUB"
  ],
  [
    "/tech/html.png",
    "I have a strong command of HTML, which enables me to efficiently organize web pages and generate meaningful content accessible to all users.",
    "HTML"
  ],
  [
    "/tech/java.png",
    "I possess vast experience in the utilization of Java for object-oriented programming (OOP) and implementation of data structures.",
    "JAVA"
  ],
  [
    "/tech/javascript.png",
    "I possess extensive experience in utilizing JavaScript to implement interactivity and functionality within web pages, thereby creating dynamic user interfaces.",
    "JAVASCRIPT"
  ],
  [
    "/tech/reactjs.png",
    "I possess extensive knowledge and expertise in React, demonstrating proficiency in creating reusable components and effectively managing application state using hooks and context.",
    "REACT"
  ],
  [
    "/tech/vite.svg",
    "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
    "VITE"
  ],
  [
    "/tech/postgresql.png",
    "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
    "POSTGRESQL"
  ],
  [
    "/tech/node.webp",
    "I have a preference for utilizing Node.js as my runtime environment when developing web applications. My expertise lies in leveraging Node.js to create robust and scalable web applications.",
    "NODE"
  ],
];

export const projects: [string, string, string, string][] =[
  ['dashboard',
   'something about a transporter project that i worked on for my school project project that i worked on for my school project',
   "/projects/transport.png",'githublink'],
   ['dashboard',
   'something about a transporter project that i worked on for my school project project that i worked on for my school project',
   "/projects/transport.png",'githublink'],
   ['dashboard',
   'something about a transporter project that i worked on for my school project project that i worked on for my school project',
   "/projects/transport.png",'githublink'],
]
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
