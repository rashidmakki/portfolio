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
  subtitle: 'I like to make stuff with code.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Full Stack developer with experience in building complex real world applications from scratch. I have adequate problem solving skills and debugging techniques in writing efficient code for scalable applications.',
  paragraphTwo:
    'I aim to develop applications that are aesthetically pleasing, user friendly and effective in solving the problem it was designed for.',
  paragraphThree: 'Feel free to contact me via email at anytime.',
  resume: 'https://drive.google.com/file/d/1cfVPPGeiUHYPnc2QJ37hN3YIVrnNp8n8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'crwn-clothing.png',
    title: 'Crown Clothing App',
    info:
      'A full stack web application which allow user to register, add items to the cart and to checkout using stripe api.',
    info2: 'I used React, Redux, Redux-Saga and Firebase in order to create this website.',
    url: 'https://apparel-live.herokuapp.com/',
    repo: 'https://github.com/rashidmakki/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'covid-19_tracker.png',
    title: 'Covid-19 Tracker',
    info:
      'A web application which fetch data globally and for different countries and their respective affected states.  I have created this website in order to track the impact of Covid-19 globally.',
    info2: 'I used React in order to create this website.',
    url: 'https://worldcoronatracker.netlify.app/',
    repo: 'https://github.com/rashidmakki/covid-19_tracker', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'faceRecog.png',
    title: 'Face Recognition App',
    info:
      "A full-stack web application which allow you to identify the detection of faces in any image supplied. This was achieved with the help of Clarifai's artificial intelligence API.",
    info2: 'I used React, Node.js, Express.js and PostgreSQL in order to create this website.',
    url: 'https://rashidmakki.github.io/face_recognition/',
    repo: 'https://github.com/rashidmakki/face_recognition', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'A web application which allow you to search for the robots according to their name.',
    info2: 'I used React, CSS3 in order to create this application.',
    url: 'https://rashidmakki.github.io/robofriends/',
    repo: 'https://github.com/rashidmakki/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'lifestyle.png',
    title: 'Lifestyle Store',
    info:
      'A full-stack web application which allows users to purchase items.The application has both authentication and authorisation for verification of users and their capabilities.',
    info2: 'I used HTML5, CSS3. Bootstrap, Javascript, PHP, MySQL in order to create this website.',
    url: 'https://rashidmakki.github.io/Ecommerce-Store/',
    repo: 'https://github.com/rashidmakki/Ecommerce-Store', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'E-Learning.png',
    title: 'E-Learning Website',
    info:
      'A full-stack web application which allow users to purchase from the list of courses and to access it after purchase is successful.Session is maintained whenever the user refresh the page.',
    info2: 'I used HTML5, CSS3, Bootstrap, Javascript, PHP, MySQL in order to create this website.',
    url: 'https://rashidmakki.github.io/E-Learning-Website/',
    repo: 'https://github.com/rashidmakki/E-Learning-Website', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'bg.png',
    title: 'Background Generator',
    info: 'A web application that generates different background colour dynamically.',
    info2: 'I used HTML5, CSS3 and Javascript in order to create this website.',
    url: 'https://rashidmakki.github.io/Background-Generator/',
    repo: 'https://github.com/rashidmakki/Background-Generator', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Ecommerce.png',
    title: 'Ecommerce Store',
    info:
      'A full-stack web application which allow users to purchase items from the cart.The application has both authentication and authorisation for verification of users and their capabilities.',
    info2: 'I used HTML5, CSS3, Bootstrap, Javascript, PHP, MySQL in order to create this website.',
    url: 'https://rashidmakki.github.io/Ecommerce-Store1/',
    repo: 'https://github.com/rashidmakki/Ecommerce-Store1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's build together",
  email: 'rashidmakkiha_cse18@its.edu.in',
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
