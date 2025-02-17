import { FaReact, FaJs, FaNodeJs } from 'react-icons/fa';
import {
  SiRedux,
  SiHeroku,
  SiMongodb,
  SiGoogle,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'Meal Plan Genie',
    description:
      'Meal Plan Genie is an automated custom meal plan generator. As a health and fitness professional, I wanted to create a tool that would help my clients reach their goals faster and more efficiently. The tool generates a custom meal plan based on the user’s macronutrient needs and preferences. Additionally, the user can swap food options and generate a new meal plans as their goals preferences change.',
    video:
      'https://storage.cloud.google.com/alvaros-bucket/project-videos/Meal%20Plan%20Generator.mov',
    techStack: [
      { name: 'ReactJS', icon: FaReact },
      { name: 'Javascript', icon: FaJs },
      { name: 'NodeJS', icon: FaNodeJs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Heroku', icon: SiHeroku },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    url: 'https://www.alvarofitness.com/tools/macronutrient-calculator',
  },
  {
    id: 2,
    title: 'Workout Log',
    description:
      "This is a section of a larger application that I build in order to manage my client's workouts, nutrition, and progress. The workout log allows the coach to log the client's workouts and refer to previous weight and rep history. It enables fitness professionals to be more effective with their training by easily accessing the client's workout history, progress photos, and more.",
    video:
      'https://storage.cloud.google.com/alvaros-bucket/project-videos/Workout%20Log.mov',
    url: '',
    techStack: [
      { name: 'ReactJS', icon: FaReact },
      { name: 'Javascript', icon: FaJs },
      { name: 'NodeJS', icon: FaNodeJs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Heroku', icon: SiHeroku },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },

  {
    id: 3,
    title: 'Carb Cycling Tool',
    description:
      "Carb cycling is a popular dieting strategy used by many athletes and competitive fitness individuals. This tool allows users to input their workout and rest day information and generates a custom carb cycling plan that is targeted to the user's goals.",
    video:
      'https://storage.cloud.google.com/alvaros-bucket/project-videos/Carb%20Cycling%20Tool.mov',
    url: '',
    techStack: [
      { name: 'ReactJS', icon: FaReact },
      { name: 'Javascript', icon: FaJs },
      { name: 'NodeJS', icon: FaNodeJs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Heroku', icon: SiHeroku },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    id: 4,
    title: 'Food Ordering And Management App',
    description:
      'The admin can set active and inactive healthy meals for the menu and users can order. The admin can also see the orders, and create an order summary based on the dates selected. The app calculates all the ingredients needed and adds them to a shopping list. (Please note this video was recorded on test mode)',
    video:
      'https://storage.cloud.google.com/alvaros-bucket/project-videos/Food%20Ordering.mov',
    url: '',
    techStack: [
      { name: 'ReactJS', icon: FaReact },
      { name: 'Javascript', icon: FaJs },
      { name: 'NodeJS', icon: FaNodeJs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Heroku', icon: SiHeroku },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    id: 5,
    title: 'My Portfolio Website',
    description:
      'This website you are currently in, is my most recent project, designed to showcase my work. I enjoy learning new tools, so I incorporated Tailwind CSS for styling and Google Cloud Storage for hosting the project’s video content, and Vercel for deployment.',
    video: '',
    url: '',
    techStack: [
      { name: 'ReactJS', icon: FaReact },
      { name: 'Javascript', icon: FaJs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'GCS', icon: SiGoogle },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
  {
    id: 6,
    title: 'Crypto Purchase Bot',
    description:
      'This is still work in progress. I am working on a bot that runs on the terminal and checks for specific Twitter Accounts to post a ca. When the bot finds one, it automatically snipes the token and sells based on certain conditions.',
    video: '',
    url: '',
    techStack: [{ name: 'Javascript', icon: FaJs }],
  },
];

export default projects;
