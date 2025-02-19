'use client';

import { Project, Videos } from '@/utils/types';
import { useState } from 'react';
import VideoPlayer from '../video-player';

const VideosWrapper = ({ videos }: { videos: Videos }) => {
  const [selectedType, setSelectedType] = useState<'ads' | 'vfx'>('ads');

  return (
    <div>
      <div className='flex gap-24 w-full justify-center items-center mb-10 sm:mb-16 lg:mb-24'>
        {/* <button
          className={`text-3xl sm:text-3xl border border-foreground rounded-md px-6 py-2 transition-all duration-300 ${selectedType === 'ads' ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-foreground hover:text-background'}`}
          onClick={() => setSelectedType('ads')}
        >
          Ads
        </button>
        <button
          className={`text-3xl sm:text-3xl border border-foreground rounded-md px-6 py-2 transition-all duration-300 ${selectedType === 'vfx' ? 'bg-foreground text-background' : 'bg-transparent text-foreground hover:bg-foreground hover:text-background'}`}
          onClick={() => setSelectedType('vfx')}
        >
          VFX
        </button> */}

        <button
          className={`text-2xl sm:text-3xl ${selectedType === 'ads' ? 'underline-full' : 'underline-link'}`}
          onClick={() => setSelectedType('ads')}
        >
          Ads
        </button>
        <button
          className={`text-2xl sm:text-3xl ${selectedType === 'vfx' ? 'underline-full' : 'underline-link'}`}
          onClick={() => setSelectedType('vfx')}
        >
          VFX
        </button>
      </div>

      {videos.adProjects &&
        videos.adProjects.length > 0 &&
        selectedType === 'ads' && (
          <div
            className={`flex flex-wrap lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 transition-all duration-300 ${selectedType === 'ads' ? 'visible opacity-100' : 'invisible opacity-0'}`}
          >
            {videos.adProjects.map((project: Project, index: number) => {
              const modifiedProject = {
                ...project,
                video: {
                  ...project.video,
                  aspectRatio: project.video.aspectRatio.replace(':', '/'),
                },
              };

              return (
                <VideoPlayer
                  key={index}
                  project={modifiedProject}
                  index={index}
                />
              );
            })}
          </div>
        )}

      {videos.vfxProjects &&
        videos.vfxProjects.length > 0 &&
        selectedType === 'vfx' && (
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 transition-all duration-300 ${selectedType === 'vfx' ? 'visible opacity-100' : 'invisible opacity-0'}`}
          >
            {videos.vfxProjects.map((project: Project, index: number) => {
              const modifiedProject = {
                ...project,
                video: {
                  ...project.video,
                  aspectRatio: project.video.aspectRatio.replace(':', '/'),
                },
              };

              return (
                <VideoPlayer
                  key={index}
                  project={modifiedProject}
                  index={index}
                />
              );
            })}
          </div>
        )}
    </div>
  );
};

export default VideosWrapper;
