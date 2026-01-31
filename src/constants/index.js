const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Web Browser", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];


const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native Basics"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS", "ShadCN Basics"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Firebase Firestore"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker Basics"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Aaron-KC",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://jsmastery.com/",
  // },
  // {
  //   id: 3,
  //   text: "Twitter/X",
  //   icon: "/icons/twitter.svg",
  //   bg: "#ff866b",
  //   link: "https://x.com/jsmasterypro",
  // },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://linkedin.com/in/aaron-k-c-30285432b",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  // {
  //   id: 2,
  //   icon: "/icons/gicon2.svg",
  //   title: "Memories",
  // },
  // {
  //   id: 3,
  //   icon: "/icons/file.svg",
  //   title: "Places",
  // },
  // {
  //   id: 4,
  //   icon: "/icons/gicon4.svg",
  //   title: "People",
  // },
  // {
  //   id: 5,
  //   icon: "/icons/gicon5.svg",
  //   title: "Favorites",
  // },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Resume Builder",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] right-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "resume-builder.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created a full-stack resume creation platform with Bcrypt password hashing and safe JWT authentication.",
            "Using Tailwind CSS, a modular, responsive React frontend was created that allows for dynamic editing of nested resume sections like education, experience, skills, and personal data, implemented Axios for client-server communication, RESTful Express endpoints with MongoDB for data persistence, and file uploads for profile pictures.",
            "PDF export features have been added, producing crisp, A4 ready documents that reflect real time user edits.",
            "React Router was integrated for smooth navigation and instantaneous feedback, providing a polished, user-specific, and completely responsive resume building experience.",
            "Route protection was implemented as well.",
          ],
        },
        {
          id: 2,
          name: "view code",
          icon: "/images/github2.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Aaron-KC/react-node-projects/tree/main/resume-app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "home.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-5 xl:left-0 xl:right-80",
          imageUrl: "/images/project1.png",
        },
        {
          id: 5,
          name: "login.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 xl:left-80 right-5 xl:right-0",
          imageUrl: "/images/project1-2.png",
        },
        {
          id: 6,
          name: "build-resume.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "xl:top-22 top-80 left-60",
          imageUrl: "/images/project-1-5.png",
        },
        {
          id: 7,
          name: "resume-dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "xl:top-12 bottom-5 xl:bottom-0 left-32",
          imageUrl: "/images/project-1-4.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Blog Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "xl:top-52 xl:right-80 top-60 left-5",
      windowPosition: "top-[20vh] right-5",
      children: [
        {
          id: 1,
          name: "blog-app.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Developed a full stack blogging platform that allows authorized users to write, edit, remove, and read blog entries",
            "Dynamic routing and responsive user interface with React and Tailwind CSS",
            "Secure JWT and Bcrypt-based authentication",
            "A textarea for writing blogs",
            "Persistent storage of blogs and user profiles in MongoDB via Express APIs with protected routes",
          ],
        },
        {
          id: 2,
          name: "view code",
          icon: "/images/github2.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Aaron-KC/react-node-projects/tree/main/blogs-app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "home.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 xl:left-80 left-5",
          imageUrl: "/images/project2.png",
        },
        {
          id: 5,
          name: "login.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-50",
          imageUrl: "/images/project2-3.png",
        },
        {
          id: 6,
          name: "blog-write.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-12 left-20",
          imageUrl: "/images/project2-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Ecommerce Site",
      icon: "/images/folder.png",
      kind: "folder",
      position: "xl:top-10 xl:left-80 top-35 left-20",
      windowPosition: "top-[35vh] right-5",
      children: [
        {
          id: 1,
          name: "Ecommerce-website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created an interactive full stack online store that allows customers to browse products, view details, add items to a cart, and finish a mock checkout",
            "Smooth client-side routing and state management",
            "Backend APIs using Strapi",
            "MongoDB persistent storage",
            "The platform exhibits end-to-end ecommerce functionality and is fully responsive with a simple, mobile-first user interface",
          ],
        },
        {
          id: 2,
          name: "view code",
          icon: "/images/github2.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Aaron-KC/react-node-projects/tree/main/ecommerce-website",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "home page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 xl:right-80 right-0",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "category section.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/images/project3-3.png",
        },
        {
          id: 6,
          name: "filter by category and price.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-40 right-50",
          imageUrl: "/images/project3-2.png",
        },
      ],
    },
    {
      id: 9,
      name: "Airbnb Clone",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-50 left-50",
      windowPosition: "top-[50vh] right-5",
      children: [
        {
          id: 1,
          name: "Airbnb-info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built a full stack Airbnb clone where users can register and log in with secure JWT authentication, book accommodations, or create their own listings with image uploads handled via Multer",
            "The platform features dynamic booking management",
            "A responsive interface",
            "Seamless interaction with listings and reservations",
          ],
        },
        {
          id: 2,
          name: "view code",
          icon: "/images/github2.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Aaron-KC/react-node-projects/tree/main/airbnb-%20clone",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "booking sites.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 xl:right-80 right-32",
          imageUrl: "/images/project-5.png",
        },
        {
          id: 5,
          name: "booking place details.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-5",
          imageUrl: "/images/project-5-2.png",
        },
        {
          id: 6,
          name: "Images viewer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "xl:top-52 xl:left-70 left-0 top-31",
          imageUrl: "/images/project-5-3.png",
        },
        {
          id: 7,
          name: "booked places.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "xl:top-22 xl:left-60 top-85 left-40",
          imageUrl: "/images/project-5-4.png",
        },
        {
          id: 8,
          name: "booking details.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "xl:top-12 top-60 xl:left-32 left-0",
          imageUrl: "/images/project-5-5.png",
        },
        {
          id: 9,
          name: "create new accomodation.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-6 left-12",
          imageUrl: "/images/project-5-6.png",
        },
      ],
    },
    {
      id: 8,
      name: "Expense Tracker",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[65vh] right-5",
      children: [
        {
          id: 1,
          name: "Expense-tracker-info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built a frontend first finance management application where users can track income and expenses, categorize items, and view their balance in real time",
            "Uses React state and hooks for dynamic updates",
            "LocalStorage for data persistence",
            "Fully responsive, interactive UI with conditional rendering",
          ],
        },
        {
          id: 2,
          name: "view code",
          icon: "/images/github2.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Aaron-KC/react-node-projects/tree/main/expense-tracker-app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "main page.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-0 xl:right-80",
          imageUrl: "/images/project-4.png",
        },
      ],
    },
    {
      id: 10,
      name: "Javascript Projects Collection",
      icon: "/images/folder.png",
      kind: "folder",
      position: "xl:top-50 bottom-10 xl:bottom-0 right-10",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "JS-projects-info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Created a collection of over 30 browser based projects using JavaScript, HTML, and CSS, including games like Tic Tac Toe, Snake, Hangman, and Typing Speed Test, productivity tools like To Do List, Expense Tracker, and Alarm Clock, and API powered apps like Weather App, QR Code Generator, and Chatbot simulator",
            "Projects feature dynamic DOM interaction, event handling, asynchronous operations, and LocalStorage for data persistence",
          ],
        },
        {
          id: 2,
          name: "view projects codes",
          icon: "/images/github2.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Aaron-KC/JS-Projects",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Snake Game.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 xl:right-80 right-30",
          imageUrl: "/images/project-6-1.png",
        },
        {
          id: 5,
          name: "Chatbot.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-5",
          imageUrl: "/images/project-6-2.png",
        },
        {
          id: 6,
          name: "Hangman.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "xl:top-52 xl:left-70 left-0 top-31",
          imageUrl: "/images/project-6-3.png",
        },
        {
          id: 7,
          name: "Quiz.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 xl:top-80 xl:left-60 left-0",
          imageUrl: "/images/project-6-4.png",
        },
        {
          id: 8,
          name: "Typing Speed Calculator.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "xl:top-12 top-78 xl:left-32 left-37",
          imageUrl: "/images/project-6-5.png",
        },
        {
          id: 9,
          name: "Stopwatch.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-6 left-12",
          imageUrl: "/images/project-6-6.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Hello People!",
      description: [
        "Hey! I’m Aaron K.C. 👋, a web developer who enjoys building interactive, responsive, and user-friendly applications.",
        "I specialize in JavaScript, React, Express.js and Tailwind CSS and I love creating projects that are smooth, functional, and visually appealing.",
        "I focus on clean code, intuitive UI/UX, and practical solutions that just work."
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 2,
      name: "trash.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-20 xl:left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, hasMounted: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
