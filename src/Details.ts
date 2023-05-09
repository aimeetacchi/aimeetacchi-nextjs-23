import { FaCodepen, FaGit, FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

// Enter your Personal Details here
export const personalDetails = {
    name: "Aimee Tacchi",
    tagline: "Hello I'm Aimee.",
    subText: "I'm a front end developer, I like building responsive websites & applications",
    // img: profile,
    title: "About Me",
    about_home: `I'm Aimee, a passionate self-taught Web Developer living in Milton Keynes. I focus primarily on writing clean, elegant, and efficient code. With a love for coding that knows no bounds, I spend most of my free time exploring new technologies and expanding my knowledge. I thrive on challenges that push me beyond my limits and enjoy developing innovative solutions.`,

    about1: `As a self-taught web developer, I'm committed to expanding my knowledge and exploring new technologies. My passion for coding is evident in how I spend most of my free time exploring new technologies and honing my skills. I seek out challenges and opportunities to push myself beyond limits, and I thrive on developing innovative solutions.`,

    about2: `With skills in React, TypeScript, HTML, CSS, JavaScript, and AWS Amplify, I'm well-equipped to tackle complex coding challenges and deliver high-quality front-end solutions. Whether it's developing a web application, a mobile app, or a responsive website, I approach each project with confidence and creativity, leveraging my skills to create visually appealing user interfaces. Over the years, I've gained hands-on experience and adapted to emerging technologies to refine my skills continually. My commitment to producing top-notch work is evident in every project I undertake.`,
    hobbies: 'My Hobbies, include travelling, photography, painting, walking, live gigs, swimming, video games.',
};

type SocialMediaItem = {
    name: string;
    url: string;
  };

export const iconMapping: Record<string, React.ElementType> = {
    codepen: FaCodepen,
    github: FaGithub,
    twitter: FaTwitterSquare,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
};

// Enter your Social Media URLs here
export const socialMediaItems: SocialMediaItem[] = [
  { 
    name: 'codepen',
    url: "https://codepen.io/aimeetacchi",
  },
  {
    name: 'github',
    url: "https://www.github.com/aimeetacchi",
  },
  {
    name: 'twitter',
    url: "https://twitter.com/aimeetacchi",
  },
  {
    name: 'instagram',
    url: "https://www.instagram.com/aimeetacchi",
  },
  {
    name: 'linkedin',
    url: "https://www.linkedin.com/in/aimeetacchi/",
  }
];

// Enter your Work Experience here
export const workDetails = [
  {
    position: "React Developer",
    company: "Space01",
    location: "Remote",
    type: "Full Time",
    duration: "July 2021 - current",
    description: "Currently working on multiple projects within financial services, from websites & websites tools to web applications. Either working in a team doing tasks on Jira board or working alone on a single project using designs supplied from a designer.",
    techStack: "React & Redux, AWS Amplify, Cognito, DynamoDB, AppSync, Styled-Components, Material-UI, Jest & React Testing Library, Tailwind, Typescript, GraphQL."
  },
  {
    position: "Web Developer",
    company: "Monogram Digital",
    location: "Bletchley Park, Milton Keynes",
    type: "Full Time",
    duration: "Sept 2019 - Feb 2021",
    description: "Developed responsive website campaigns for a huge automotive company based on the clients design requirements using HTML5, CSS3/SCSS, JavaScript and PHP",
    techStack: "HTML, CSS/SCSS, Foundation, Javascript, jQuery, Wordpress, Gulp and Git, Jira, Bitbucket"
  },
  {
    position: "Web Developer",
    company: "Barley Agency",
    location: "Cuffley, Hertfordshire",
    type: "Full Time",
    duration: "Aug 2018 - Sept 2019",
    description: "Developed fully functional responsive websites based on the clients requirements using HTML5, CSS3/SCSS, JavaScript and JQuery. Taking a design and developing bespoke Wordpress (CMS) sites, building themes from scratch from start to finish. Created wireframes in Balsamiq for designers to create a design from.",
    techStack: "HTML, CSS/SCSS, Bootstrap, Javascript, PHP, Wordpress, Gulp and Git."
  },
  {
    position: "Front End Developer",
    company: "Big Marketing",
    location: "Milton Keynes",
    type: "Full Time",
    duration: "May 2017 - Aug 2018",
    description: "Using HTML, CSS & Scss, jQuery & Javascript, I was involved in the design and development of microsites, brochure sites websites and HTML emails. Assisted the digital lead in building an React & NodeJS file transfer application to assist the design and sales team.",
    techStack: "HTML, CSS/SCSS, Bootstrap, Javascript, PHP, Wordpress, Gulp and Git."
  },
  {
    position: "Junior Developer",
    company: "IO42",
    location: "Chesham, Buckinghamshire",
    type: "Full Time",
    duration: "Mac 2016 - May 2017",
    description: "Turning a custom design into bespoke responsive websites from scratch (no templates used). Coding in HTML5, CSS3 and Javascript, JQuery. Gulp & Git, Command Line.",
    techStack: "HTML, CSS/SCSS, Bootstrap, JQuery, Javascript, PHP, Git."
  }
];

export const gitHubDetails = {
    title: "Pinned Github Repos",
    content: "I constantly engage in building and experimenting with various projects. Below are some of my pinned repositories that I take great pride in.",
    smalltext: "This data is fetched using GitHub API & GraphQL",
}

// Tech Stack and Tools
export const techStackDetails = {
    title: "My current tech stack",
    frontend: "Front End",
    backend: "Back End",
    design: "Design Tools",
    tools: "Tools",
};

export const experienceContent = {
  title: "Professional Experience",
}

// Enter your Contact Details here
export const contactDetails = {  };