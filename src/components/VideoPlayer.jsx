import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className='relative w-full pt-[56.25%] overflow-hidden rounded-xl'>
      <ReactPlayer
        url={url}
        controls
        width='100%'
        height='100%'
        className='absolute top-0 left-0 w-full h-full'
      />
    </div>
  );
};

export default VideoPlayer;
