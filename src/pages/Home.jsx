import { useState, useRef } from 'react';
import Alvaro from '../assets/images/Alvaro.png';
import projects from '../data/projects';
import { ArrowRightIcon, LinkIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const ref = useRef(null);

  return (
    <div className='flex flex-col bg-gray-100 dark:bg-gray-900 p-8'>
      <div className='flex-1 w-full flex flex-col items-center justify-center p-6 sm:py-6 bg-white dark:bg-gray-800 rounded-lg'>
        <div className='flex flex-col items-center justify-center max-w-[600px]'>
          <img
            src={Alvaro}
            className='w-[100px] h-[100px] rounded-full object-cover mb-4'
            alt='Alvaro'
          />
          <div className='text-center'>
            <h1 className='text-3xl sm:text-4xl font-bold text-blue-500 dark:text-blue-300'>
              Hello, I'm Alvaro.
            </h1>
          </div>
          <p className='mt-4 text-gray-700 dark:text-gray-400 text-center'>
            A Front-end developer with a health and fitness background
            passionate about creating unique, creative solutions that empower
            individuals and businesses. Please take a look at some of my
            projects and feel free to reach out if you have any questions about
            my background and experience.
          </p>
          <p className='mt-4 mb-4 text-gray-700 dark:text-gray-400 sm:text-left'>
            📧{' '}
            <a href='mailto:alvarodltp@gmail.com' className='underline'>
              alvarodltp@gmail.com
            </a>
          </p>
          <p className='text-gray-700 dark:text-gray-400'>
            📞{' '}
            <a href='tel:4786960637' className='underline'>
              (478) 696-0637
            </a>
          </p>
          <div className='flex space-x-4 mt-4'>
            <FaGithub
              className='w-6 h-6 cursor-pointer'
              onClick={() =>
                window.open(
                  'https://github.com/alvarodltp',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <FaLinkedin
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/alvaro-de-la-torre-/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className='w-6 h-6 cursor-pointer'
            />
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className='flex flex-col sm:flex-row w-full space-y-6 sm:space-y-0 sm:space-x-6 mt-6'
      >
        <div className='space-y-6 flex-1'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-1 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 cursor-pointer hover:shadow-xl transition-shadow duration-300 ${
                selectedProject.key === project.key
                  ? 'bg-blue-500 text-white dark:bg-blue-700'
                  : 'bg-white dark:bg-gray-800'
              }`}
              onClick={() => {
                setSelectedProject(project);
                ref.current.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                    {`Project ${project.id}: ${project.title}`}
                  </h3>
                </div>
                <ArrowRightIcon className='h-6 w-6 text-gray-900 dark:text-white' />
              </div>
            </div>
          ))}
        </div>
        <div className='flex-1 w-full flex flex-col items-center justify-start bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8'>
          <div className='flex items-center'>
            <h1 className='text-xl font-semibold text-gray-900 dark:text-gray-100 pr-4'>
              {selectedProject.title}
            </h1>
            {selectedProject.url && (
              <LinkIcon
                className='w-5 h-5 cursor-pointer'
                onClick={() =>
                  window.open(
                    selectedProject.url,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              />
            )}
          </div>
          <p className='text-gray-700 dark:text-gray-300 mt-2'>
            {selectedProject.description}
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 mb-4'>
            {selectedProject.techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className='flex items-center space-x-1'>
                  <Icon className='w-6 h-6 text-gray-600 dark:text-white' />
                  <span className='text-sm text-gray-500 dark:text-gray-300'>
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          <VideoPlayer url={selectedProject.video} />
        </div>
      </div>
    </div>
  );
}
