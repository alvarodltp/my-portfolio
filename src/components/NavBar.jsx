import React, { useState } from 'react';
// import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
// import { useDarkMode } from '../hooks/DarkModeContext';

export default function Navbar() {
  // const [darkMode, setDarkMode] = useDarkMode();
  const [joke, setJoke] = useState({ setup: '', punchline: '' });

  const getJoke = () => {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
      .then((response) => response.json())
      .then((data) =>
        setJoke({ setup: data[0].setup, punchline: data[0].punchline })
      )
      .catch((error) => console.error('Error fetching joke:', error));
  };

  return (
    <div className='w-full px-8 mt-8'>
      <nav className='w-full bg-gray-100 dark:bg-gray-800 shadow-lg p-0 rounded-lg grid grid-cols-1 sm:grid-cols-2 items-center px-4 py-4'>
        <h4 className='py-2 text-lg font-semibold text-center sm:text-left'>
          Welcome To My Portfolio
        </h4>
        {joke.setup && joke.punchline ? (
          <div className='grid justify-center sm:justify-end'>
            <p>{joke.setup}</p>
            <span className='flex justify-center sm:justify-end'>
              {joke.punchline}
              <p
                className='pl-2 cursor-pointer text-blue-500'
                onClick={() => setJoke({ setup: '', punchline: '' })}
              >
                Hide
              </p>
            </span>
          </div>
        ) : (
          <button
            onClick={() => getJoke()}
            className='px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer justify-self-center sm:justify-self-end'
          >
            Joke of the day
          </button>
        )}
      </nav>
    </div>
  );
}
