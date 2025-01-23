'use client';

import MuxVideo from '@mux/mux-video-react';
import { useEffect, useRef, useState } from 'react';
import CustomCursor from './cursor/custom-cursor';

type Project = {
  _id: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  video: {
    playbackId: string;
    aspectRatio: string;
  };
};

const VideoPlayer = ({
  project,
  index,
  className,
  containerClassName,
}: {
  project: Project;
  index: number;
  className?: string;
  containerClassName?: string;
}) => {
  const playerRef = useRef<any | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  if (!project.video.playbackId) {
    return null;
  }

  const handleMouseEnter = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (playerRef.current && document.fullscreenElement !== playerRef.current) {
      playerRef.current.pause();
    }
    setIsHovered(false);
  };

  const handleVideoClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('im in');
    const player = playerRef.current;

    if (!player) return;

    const isFullscreen = document.fullscreenElement === player;

    if (!isFullscreen) {
      console.log('im in fullscreen');
      if (player.requestFullscreen) {
        console.log('im in requestFullscreen');
        await player.requestFullscreen();
      } else if (player.webkitRequestFullscreen) {
        console.log('im in webkitRequestFullscreen');
        await player.webkitRequestFullscreen();
      } else if (player.webkitEnterFullScreen) {
        console.log('im in webkitEnterFullScreen');
        await player.webkitEnterFullScreen();
      } else {
        console.error('Fullscreen API is not supported on this browser.');
      }
    }
  };

  const handleFullscreenChange = async () => {
    const player = playerRef.current;

    if (!player) return;

    const isFullscreen = document.fullscreenElement === player;

    if (isFullscreen) {
      player.controls = true;
      player.muted = false;
    } else {
      player.controls = false;
      player.muted = true;
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div
      className={`${index === 0 && `${containerClassName} relative mx-auto`} cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(event) => handleVideoClick(event)}
      // onTouchEnd={}
    >
      <div className='absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-9 lg:left-9 z-10 lg:group-hover:opacity-100 lg:opacity-0 lg:transition-opacity lg:duration-300'>
        <h2 className='text-white text-3xl sm:text-4xl lg:text-5xl font-medium'>
          {project.title}
        </h2>
      </div>
      <MuxVideo
        ref={playerRef}
        playbackId={project.video.playbackId}
        minResolution='1080p'
        preload={[0].includes(index) ? 'auto' : 'none'}
        poster={project.image.url}
        playsInline
        disablePictureInPicture
        muted
        loop
        metadata={{
          video_id: project._id,
          video_title: project.title,
        }}
        controls={false}
        className={`max-h-full aspect-[${project.video.aspectRatio}] w-full ${className}`}
      />
      <CustomCursor isActive={isHovered} text='PLAY' />
    </div>
  );
};

export default VideoPlayer;
