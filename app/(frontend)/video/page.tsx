import VideoPlayer from '@/components/video-player';
import { sanityFetch } from '@/sanity/lib/client';
import { Project, Videos } from '@/utils/types';

export default async function Video() {
  async function getVideos() {
    'use server';

    const videos: Videos = await sanityFetch({
      query: `*[_type == "videos"][0] {
          title,
          vfxProjects[]->{
          _id,
          title,
          image {
            'url': asset->url + "?auto=format",
            alt
          },
          video {
            'playbackId': video.asset->playbackId,
            'aspectRatio': video.asset->data.aspect_ratio
          },
          order
        },
        adProjects[]->{
            _id,
          title,
          image {
            'url': asset->url + "?auto=format",
            alt
          },
          video {
            'playbackId': video.asset->playbackId,
            'aspectRatio': video.asset->data.aspect_ratio
          },
          order
        },
      }`,
      tags: ['videos'],
    });

    return videos;
  }

  const videos = await getVideos();

  if (
    !videos ||
    (!videos.adProjects && !videos.vfxProjects) ||
    (videos.adProjects.length < 1 && videos.vfxProjects.length < 1)
  ) {
    return <div>No videos found</div>;
  }

  return (
    <main className='flex flex-wrap lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 px-side pt-28 sm:pt-44 lg:pt-48 pb-28 sm:pb-36 lg:pb-40'>
      {videos.adProjects &&
        videos.adProjects.length > 0 &&
        videos.adProjects.map((project: Project, index: number) => {
          const modifiedProject = {
            ...project,
            video: {
              ...project.video,
              aspectRatio: project.video.aspectRatio.replace(':', '/'),
            },
          };

          return (
            <VideoPlayer key={index} project={modifiedProject} index={index} />
          );
        })}
      {videos.vfxProjects &&
        videos.vfxProjects.length > 0 &&
        videos.vfxProjects.map((project: Project, index: number) => {
          const modifiedProject = {
            ...project,
            video: {
              ...project.video,
              aspectRatio: project.video.aspectRatio.replace(':', '/'),
            },
          };

          return (
            <VideoPlayer key={index} project={modifiedProject} index={index} />
          );
        })}
    </main>
  );
}
