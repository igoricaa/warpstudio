'use client';

import MuxVideo from '@mux/mux-video-react';
import { useEffect, useRef } from 'react';

type Project = {
  _id: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  video: {
    playbackId: string;
  };
};

const VideoPlayer = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const playerRef = useRef<any | null>(null);

  if (!project.video.playbackId) {
    return null;
  }

  const handleMouseEnter = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (playerRef.current && document.fullscreenElement !== playerRef.current) {
      playerRef.current.pause();
    }
  };

  const handleVideoClick = async () => {
    const player = playerRef.current;

    if (!player) return;

    const isFullscreen = document.fullscreenElement === player;

    if (!isFullscreen) {
      await player.requestFullscreen();
    }

    // if (document.fullscreenElement) {
    //   await document.exitFullscreen();
    //   player.classList.add('mux-player-controls');
    // } else {
    //   await player.requestFullscreen();
    //   player.classList.remove('mux-player-controls');
    // }
  };

  const handleFullscreenChange = async () => {
    const player = playerRef.current;

    if (!player) return;

    const isFullscreen = document.fullscreenElement === player;

    if (isFullscreen) {
      //   player.classList.remove('mux-player-controls');
      player.controls = true;
    } else {
      //   player.classList.add('mux-player-controls');
      player.controls = false;
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <MuxVideo
      ref={playerRef}
      playbackId={project.video.playbackId}
      minResolution='1080p'
      preload={[0, 1, 2].includes(index) ? 'auto' : 'none'}
      playsInline
      muted
      loop
      // poster={project.image.url}
      metadata={{
        video_id: project._id,
        video_title: project.title,
      }}
      controls={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleVideoClick}
      className='max-h-full'
    />
  );
};

export default VideoPlayer;

{
  /* <MuxPlayer
        ref={playerRef}
        playbackId={project.video.playbackId}
        minResolution='1080p'
        preload={[0, 1, 2].includes(index) ? 'auto' : 'none'}
        playsInline
        muted
        poster={project.image.url}
        metadata={{
          video_id: project._id,
          video_title: project.title,
        }}
        loading='page'
        style={{
          aspectRatio: '16 / 9',
          width: '100%',
          height: '100%',
        }}
        className='mux-player-controls'
      /> */
}
