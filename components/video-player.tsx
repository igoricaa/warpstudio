'use client';

import MuxVideo from '@mux/mux-video-react';
import { useEffect, useRef, useState } from 'react';
import CustomCursor from './cursor/custom-cursor';
import { Project } from '@/utils/types';
import InViewWrapper from './inview-wrapper';

const VideoPlayer = ({
  project,
  index,
  className,
}: {
  project: Project;
  index: number;
  className?: string;
}) => {
  const playerRef = useRef<any | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
    const player = playerRef.current;

    if (!player) return;

    if (!isFullscreen) {
      if (player.requestFullscreen) {
        await player.requestFullscreen();
        setIsFullscreen(true);
      } else if (player.webkitRequestFullscreen) {
        await player.webkitRequestFullscreen();
        setIsFullscreen(true);
      } else if (player.webkitEnterFullScreen) {
        await player.webkitEnterFullScreen();
        setIsFullscreen(true);
      } else {
        console.error('Fullscreen API is not supported on this browser.');
      }
    }
  };

  const handleFullscreenChange = async () => {
    const player = playerRef.current;

    if (!player) return;

    const isFullscreenLocal =
      player.webkitDisplayingFullscreen || document.fullscreenElement;

    if (isFullscreen || isFullscreenLocal) {
      player.controls = true;
      player.muted = false;
    } else {
      player.controls = false;
      player.muted = true;
    }
  };

  useEffect(() => {
    [
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'msfullscreenchange',
      'onwebkitfullscreenchange',
    ].forEach((eventType) =>
      document.addEventListener(eventType, handleFullscreenChange)
    );
    return () => {
      [
        'fullscreenchange',
        'webkitfullscreenchange',
        'mozfullscreenchange',
        'msfullscreenchange',
        'onwebkitfullscreenchange',
      ].forEach((eventType) =>
        document.removeEventListener(eventType, handleFullscreenChange)
      );
    };
  }, []);

  return (
    <div
      className='w-full max-w-7xl mx-auto h-full relative group cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(event) => handleVideoClick(event)}
    >
      <InViewWrapper>
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
      </InViewWrapper>
      <CustomCursor isActive={isHovered} text='PLAY' />
    </div>
  );
};

export default VideoPlayer;
