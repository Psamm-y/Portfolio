
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/github.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I'm constantly learning",
    description:"Learning new stuff and improving on old ones",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Accomodation Startup",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Can we create magic together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "QuickHomes - an Accomodaton Webapp",
    des: "Discover a vast listing of properties based on your choice that you can buy or rent built in Reactjs",
    img: "/QH2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg","/emailjs.jpeg"],
    pinTitle:"QuickHomes",
    link: "https://github.com/Psamm-y/QuickHomes-refactored",
    deployed:false
  },
  {
    id: 2,
    title: "GitMetrix",
    des: "A platform for comparing the stats (stars, contributions etc.) of two github geeks",
    img: "/gitmetrix.png",
    iconLists: ["/react.svg","/typescript.svg","/tail.svg","/graphql.svg","/rest-api.png"],
    pinTitle:"GitMetrix",
    link: "https://github.com/Psamm-y/GitMetrix",
    deployed: false
  },
  {
    id: 3,
    title: "Manifold Consulting",
    des: "A sleek and responsive website for a tech consulting firm",
    img: "/manifold.png",
    iconLists: ["/nextjs.svg","/tail.svg","/framer.png","/typescript.svg"],
    pinTitle:"Manifold",
    link: "https://github.com/niicommey01/fallenangel",
    deployed:false
  },
  {
    id: 4,
    title: "Fallen Angel: Online Clothing Brand",
    des: "An online ecommerce store for selling of the 'Fallen angel' clothing ",
    img: "/fallen.png",
    iconLists: ["/react.svg","/tail.svg","/typescript.svg"],
    pinTitle:"Fallen angel.",
    link: "",
    deployed:false
  }
];




export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Headstarter Ai",
    date:"Jan 2025 - Mar 2025",
    desc: "Developed chatbots using relevant frameworks and tools, enhancing conversational AI capabilities.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Contributor",
    company: "Resourcio Community",
    date:"Mar 2025 - Apr 2025",
    desc: "Contributed to projects spanning easy, intermediate, and advanced difficulty levels, enhancing diverse open-source repositories.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href:"https://github.com/psamm-y"
  },
  {
    id: 2,
    img: "/x.svg",
    href:"https://x.com/ampadu_psamuel"
  },
  {
    id: 3,
    img: "/link.svg",
    href:"https://linkedin.com/in/ampadu-samuel"
  },
];