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

export const TECH_LIST = [
  { title: "Python", icon: "icon_python.svg", featured: true },
  { title: "Java", icon: "icon_java.svg", featured: false },
  { title: "JavaScript", icon: "icon_js.svg", featured: false },
  { title: "HTML", icon: "icon_html.svg", featured: false },
  { title: "CSS", icon: "icon_css.svg", featured: false },
  { title: "SQL", icon: "icon_sql.svg", featured: true },
  { title: "MongoDB", icon: "icon_mongo.svg", featured: true },
  { title: "ReactJS", icon: "icon_react.svg", featured: true },
  { title: "Flask", icon: "icon_flask.svg", featured: false },
  { title: "NextJS", icon: "icon_next.svg", featured: true },
  { title: "Firebase", icon: "icon_firebase.svg", featured: true },
  { title: "Supabase", icon: "icon_supabase.svg", featured: false },
  { title: "Git", icon: "icon_git.svg", featured: true },
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
    achievements: "Technological Council EXCO: Project Manager",
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
    desc: "Distinction in junior category",
    awarded_by: "University of Waterloo",
  },
];
