export const INITIAL_ANIM_TIME = 0.8;
export const ANIM_DELAY_FACTOR = 0.2;
export const LOGO_WIDTH = 40;
export const LOGO_WORD_WIDTH = 150;
export const ICONS_SIZE = 80;

export const NAVIGATION_LINKS = [
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Shop", link: "/shop" },
  { title: "Blog", link: "/blog" },
];

export const TECH_CAT = [
  { id: "language", title: "Languages", small: false },
  { id: "web", title: "Web Development Technologies", small: false },
  { id: "backend", title: "Backend Technologies", small: false },
  { id: "frontend", title: "Frontend Technologies", small: false },
  { id: "database", title: "Databases", small: false },
  { id: "version", title: "Version Control", small: true },
  { id: "ui", title: "UI/UX Design", small: true },
];

export const TECH_LIST = [
  {
    title: "Python",
    icon: "icon_python.svg",
    featured: true,
    cat: ["language", "backend"],
  },
  {
    title: "Java",
    icon: "icon_java.svg",
    featured: false,
    cat: ["language", "backend"],
  },
  {
    title: "HTML",
    icon: "icon_html.svg",
    featured: false,
    cat: ["frontend", "web"],
  },
  {
    title: "CSS",
    icon: "icon_css.svg",
    featured: false,
    cat: ["frontend", "web"],
  },
  {
    title: "JavaScript",
    icon: "icon_js.svg",
    featured: false,
    cat: ["language", "backend", "frontend", "web"],
  },
  {
    title: "SQL",
    icon: "icon_sql.svg",
    featured: true,
    cat: ["database"],
  },
  {
    title: "MongoDB",
    icon: "icon_mongo.svg",
    featured: true,
    cat: ["database"],
  },
  {
    title: "ReactJS",
    icon: "icon_react.svg",
    featured: true,
    cat: ["frontend", "web"],
  },
  {
    title: "Flask",
    icon: "icon_flask.svg",
    featured: false,
    cat: ["backend", "web"],
  },
  {
    title: "NextJS",
    icon: "icon_next.svg",
    featured: true,
    cat: ["backend", "frontend", "web"],
  },
  {
    title: "Firebase",
    icon: "icon_firebase.svg",
    featured: true,
    cat: ["backend", "database", "web"],
  },
  {
    title: "Supabase",
    icon: "icon_supabase.svg",
    featured: false,
    cat: ["backend", "database", "web"],
  },
  {
    title: "Git",
    icon: "icon_git.svg",
    featured: true,
    cat: ["version"],
  },
  {
    title: "Figma",
    icon: "icon_figma.svg",
    featured: true,
    cat: ["ui"],
  },
  {
    title: "Photoshop",
    icon: "icon_ps.svg",
    featured: false,
    cat: ["ui"],
  },
  {
    title: "Premier",
    icon: "icon_prem.svg",
    featured: false,
    cat: ["ui"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Teo Qing Ren",
    from: "Anglo-Chinese Junior College",
    src: "teo.jfif",
    quote:
      "Ike is a confident young man who has displayed a strong sense of purpose in all that he pursues. He is undaunted by challenges and views them as learning opportunities to improve himself.",
  },
  {
    name: "Britmand Wong",
    from: "Ngee Ann Secondary School",
    src: "wong.jfif",
    quote:
      "Meticulous and thorough in nature, Ike takes pride in the quality of the work he presents and works steadily towards his goals.",
  },
];

export const PROJECTS = {
  Social40: {
    landing: "social40/landing_social.svg",
    landingDesc:
      "Customised social ERP platform, tailored for the Army's needs.",
    link: "/portfolio/social40",
    colors: {
      accent: "bg-[#E87B34]",
      background: "min-[350px]:dark:to-[#291000] min-[350px]:to-[#FFCFB0]",
    },
  },
  "Mademoiselle Angel": {
    landing: "mademoiselle-angel/landing_angel.svg",
    landingDesc: "Full Stack E-Commerce platform for a family business.",
    link: "/portfolio/mademoiselle-angel",
    colors: {
      accent: "bg-[rgb(75,75,223)]",
      background: "min-[350px]:dark:to-[rgb(0,0,36)] min-[350px]:to-[#e5e7ff]",
    },
  },
  PassSafe: {
    landing: "passsafe/landing_passsafe.svg",
    landingDesc:
      "Want to be safe online but too many passwords to remember? Do not fear, PassSafe is here.",
    link: "/portfolio/passsafe",
    colors: {
      accent: "bg-[#0094df]",
      background: "min-[350px]:dark:to-[#002a41] min-[350px]:to-[#ace3ff]",
    },
  },
  "Project Econs": {
    landing: "project-econs/landing_econs.svg",
    landingDesc: "Customised Python software engineering and automation.",
    link: "/portfolio/project-econs",
    colors: {
      accent: "bg-[#00C445]",
      background: "min-[350px]:to-[#a2ffc3] min-[350px]:dark:to-[#00551e]",
    },
  },
} as {
  [id: string]: {
    landing: string;
    landingDesc: string;
    link: string;
    colors: {
      accent: string;
      background: string;
    };
  };
};

export const SOCIALS_LINKS = [
  {
    title: "LinkedIn",
    srcLight: "linkedin-light.svg",
    srcDark: "linkedin-dark.svg",
    link: "https://linkedin.com/in/ike-lim/",
  },
  {
    title: "GitHub",
    srcLight: "github-light.svg",
    srcDark: "github-dark.svg",
    link: "https://github.com/ikeawesom/",
  },
  {
    title: "Instagram",
    srcLight: "instagram-light.svg",
    srcDark: "instagram-dark.svg",
    link: "https://www.instagram.com/mentaicode/",
  },
  // {
  //   title: "TikTok",
  //   src: "",
  //   link: "https://www.instagram.com/mentaicode/",
  // },
];

export const STATISTICS = [
  { progress: 4, tag: "Years of Experience" },
  { progress: 10, tag: "Completed Projects" },
  { progress: 30, tag: "Satisfied Users" },
];

export const EDUCATION = [
  {
    name: "Anglo-Chinese Junior College",
    start_year: 2021,
    end_year: 2022,
    achievements:
      "Technological Council Executive Committee and Project Manager",
    res: "Distinctions in Computing and Mathematics",
  },
  {
    name: "Ngee Ann Secondary School",
    start_year: 2017,
    end_year: 2020,
    achievements: "Senior Sports Leader",
    res: "Distinctions in A-Maths, E-Maths, Chemistry, Physics, Computing and Geography",
  },
];

export const AWARDS = [
  {
    name: "Computing @ SMU Award",
    date: "October 2022",
    desc: "Outstanding academic performance and passion in computing",
    awarded_by: "Singapore Management University",
  },
  {
    name: "National Olympiad in Informatics",
    date: "March 2022",
    desc: "Bronze Medal and Third in School",
    awarded_by: "National University of Singapore",
  },
  {
    name: "Canadian Computing Competition",
    date: "February 2022",
    desc: "Distinction in Junior category",
    awarded_by: "University of Waterloo",
  },
];
