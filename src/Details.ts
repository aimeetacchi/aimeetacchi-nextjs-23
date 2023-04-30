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
    Position: "Web Developer",
    Company: "Space01",
    Location: "Home",
    Type: "Full Time",
    Duration: "July 2021 - current",
  }
];

export const gitHubDetails = {
    title: "Pinned Github Repos",
    content: "I am always building and playing around with projects here is just some of my pinned repos that I am most proud of.",
    smalltext: "GitHub API & GraphQL",
}

// Tech Stack and Tools
export const techStackDetails = {
    title: "My Tech Stack",
    frontend: "Front End",
    backend: "Back End",
    design: "Design Tools",
    tools: "Tools",

};

// Enter your Contact Details here
export const contactDetails = {  };