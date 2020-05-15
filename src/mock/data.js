import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Rashid Makki', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Rashid Makki',
  subtitle: "I'm the Developer you need.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'faceRecog.png',
    title: 'Face Recognition App',
    info: '',
    info2: '',
    url: 'https://rashidmakki.github.io/face_recognition/',
    repo: 'https://github.com/rashidmakki/face_recognition', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: '',
    info2: '',
    url: 'https://rashidmakki.github.io/robofriends/',
    repo: 'https://github.com/rashidmakki/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'lifestyle.png',
    title: 'Lifestyle Store',
    info: '',
    info2: '',
    url: 'https://rashidmakki.github.io/Ecommerce-Store/',
    repo: 'https://github.com/rashidmakki/Ecommerce-Store', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'E-Learning.png',
    title: 'E-Learning Website',
    info: '',
    info2: '',
    url: 'https://rashidmakki.github.io/E-Learning-Website/',
    repo: 'https://github.com/rashidmakki/E-Learning-Website', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'bg.png',
    title: 'Background Generator',
    info: '',
    info2: '',
    url: 'https://rashidmakki.github.io/Background-Generator/',
    repo: 'https://github.com/rashidmakki/Background-Generator', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Ecommerce.png',
    title: 'Ecommerce Store',
    info: '',
    info2: '',
    url: 'https://rashidmakki.github.io/Ecommerce-Store1/',
    repo: 'https://github.com/rashidmakki/Ecommerce-Store1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's Talk",
  email: 'arashid854@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/rashidmakki',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
