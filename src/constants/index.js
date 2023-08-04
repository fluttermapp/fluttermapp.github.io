import { tadas, ilies, pavel, facebook, instagram, linkedin, twitter, dropbox, logo } from "../assets";

export const idNavLink1 = 'Home';
export const idNavLink2 = 'Courses';
export const idNavLink3 = 'Reviews';
export const idNavLink4 = 'Login';

export const navLinks = [
  {
    id: idNavLink1,
    title: "Home",
  },
  {
    id: idNavLink2,
    title: "Course",
  },
  {
    id: idNavLink3,
    title: "Reviews",
  },
  {
    id: idNavLink4,
    title: "Login",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: logo,
    title: "Why?",
    content:
      "Why make it comlicated? We believe Flutter should be simple to understand and quick to learn, period.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Flutter Mapp doesn't waste any time. The content is always packed with information and produced with amazing quality!",
    name: "Tadas Petra",
    title: "Google Developer Expert",
    img: tadas,
  },
  {
    id: "feedback-2",
    content:
      "Thank you so much 😊🙏 that was very clear and straight to the point",
    name: "Ilies Space ",
    title: "YouTube comment",
    img: ilies,
  },
  {
    id: "feedback-3",
    content:
      "Finally I understood how Flutter works and now I know which way I need to go. Thank you very much.",
    name: "Pável Atmosfera",
    title: "Student",
    img: pavel,
  },
  {
    id: "feedback-4",
    content:
      "We believe Flutter should be simple to understand and quick to learn, period.",
    name: "Flutter Mapp",
    title: "Keep it simple",
    img: logo,
  },

];

export const stats = [
  {
    id: "stats-1",
    title: "Students",
    value: "3000+",
  },
  {
    id: "stats-3",
    title: "Subscribers",
    value: "170 000+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Free items",
        path: "/Free",
        isNewPage: false,
      },
      {
        name: "Youtube",
        path: "https://www.youtube.com/fluttermapp",
        isNewPage: true,
      },

      /* {
        name: "Terms & Services",
        path: "/Terms",
        isNewPage: false,
      }, */
    ],
  },
  {
    title: "Community",
    links: [
      /* {
        name: "Help Center",
        path: "/404",
        isNewPage: false,
      }, */
      /* {
        name: "Partners",
        path: "/404",
        isNewPage: false,
      }, */
      /* {
        name: "Suggestions",
        path: "/404",
        isNewPage: false,
      }, */
      {
        name: "Discord",
        path: "https://discord.com/invite/CrdmDraphN",
        isNewPage: true,
      },
      /* {
        name: "Newsletters",
        path: "/404",
        isNewPage: false,
      }, */
    ],
  },
  {
    title: "Affiliate",
    links: [
      /* {
        name: "Our Partner",
        path: "/404",
        isNewPage: false,
      }, */
      {
        name: "Become a affiliate",
        path: "/Partner",
        isNewPage: false,
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/fluttermapp",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/fluttermapp",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/fluttermapp",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: dropbox,
  },
  {
    id: "client-2",
    logo: dropbox,
  },
  {
    id: "client-3",
    logo: dropbox,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];