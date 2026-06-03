export const siteConfig = {
  name: "Rishabh Mehta",
  shortName: "Rishabh Mehta",
  title:
    "Rishabh Mehta | Senior Frontend & Full-Stack JavaScript Developer",
  description:
    "Portfolio of Rishabh Mehta — senior frontend and full-stack developer specializing in React, Vue, Angular, TypeScript, and scalable web applications. Based in India.",
  url: process.env.REACT_APP_SITE_URL || "https://onerishabh.in",
  locale: "en_IN",
  email: "mehta.rishabh0@gmail.com",
  phone: "+91 8747824255",
  imagePath: "/images/rishabh.jpg",
  keywords: [
    "Rishabh Mehta",
    "frontend developer",
    "full stack developer",
    "React developer",
    "JavaScript developer",
    "Vue.js",
    "Angular",
    "TypeScript",
    "web developer India",
    "portfolio",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/rishabh-mehta-nit/",
    github: "https://github.com/mehtarishabh",
    codepen: "https://codepen.io/rishabh247",
    leetcode: "https://leetcode.com/mehta_rishabh/",
  },
};

export const pageSeo = {
  home: {
    title: "Home",
    description: siteConfig.description,
    path: "/",
  },
  about: {
    title: "About",
    description:
      "Learn about Rishabh Mehta — NIT Goa graduate, senior programmer, and frontend specialist passionate about quality web experiences.",
    path: "/about",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Rishabh Mehta for freelance, full-time, or consulting opportunities. Email, phone, and WhatsApp details.",
    path: "/contact",
  },
};
