type SocialType = {
  id: number;
  name: string;
  src: string;
  link: string; // This makes link optional
};

export const otherSkillsData =[
  {
    id:1,
    skill: 'Photoshop',
    percentage: 80,
  },
  {
    id:2,
    skill: 'Adobe Illustrator',
    percentage: 90
  },
  {
    id:3,
    skill: 'English (Soft Skill)',
    percentage: 65
  },
  {
    id:4,
    skill: 'Microsoft Excel',
    percentage: 90
  },
  {
    id:5,
    skill: 'Data Entry',
    percentage: 100
  },
  {
    id:6,
    skill: 'Wordpress',
    percentage: 90
  },
  {
    id:7,
    skill: 'Figma',
    percentage: 60
  }
]

export const developmentSkillsData = [
  {
    id:1,
    skill: 'React Native',
    percentage: 95,
  },
  {
    id:2,
    skill: 'React Js',
    percentage: 95,
  },
  {
    id:3,
    skill: 'HTML/ CSS',
    percentage: 85,
  },
  {
    id:4,
    skill: 'Python',
    percentage: 70,
  },
  {
    id:5,
    skill: 'MongoDB',
    percentage: 90,
  },
  {
    id:6,
    skill: 'JAVASCRIPT',
    percentage: 90,
  },
  {
    id:7,
    skill: 'JAVA',
    percentage: 80,
  },
  {
    id:8,
    skill: 'Firebase/ Xamp/ SQL Client',
    percentage: 85,
  },
  {
    id:9,
    skill: 'Node JS',
    percentage: 70,
  }
]

export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },

];

export const Socials: SocialType[] = [
  {
    id:1,
    name: "Git Hub",
    src: "/github-142-svgrepo-com.svg",
    link: process.env.NEXT_PUBLIC_GITHUB_URL ?? "#"
  },
  {
    id:2,
    name: "Linkedin",
    src: "/linkedin-svgrepo-com.svg",
    link: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#"
  },
  {
    id:3,
    name: "Facebook",
    src: "/facebook.svg",
    link: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "#"
  },
  {
    id:4,
    name: "Instagram",
    src: "/instagram.svg",
    link: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "#"
  },
];



export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Other_Programming_Languages = [
  {
    skill_name: "Python",
    Image: "/python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    Image: "/c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C#",
    Image: "/c-sharp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Cpp",
    Image: "/cpp.png",
    width: 80,
    height: 80,
  },
]

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: "/Firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Xampp Server",
    Image: "/xampp.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Cloudinary",
    Image: "/cloudinary.png",
    width: 80,
    height: 80,
  }
];

export const Full_stack = [
  {
    skill_name: "React Native",
    Image: "/ReactNative .png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MERN Stack",
    Image: "/mern.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 70,
    height: 70,
  }
];



export const Other_skill = [
  {
    skill_name: "Flask",
    Image: "/flask.png",
    width: 60,
    height: 60,
  },
];




