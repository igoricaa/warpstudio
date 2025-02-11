import InViewWrapper from '@/components/inview-wrapper';
import VideoPlayer from '@/components/video-player';
import { sanityFetch } from '@/sanity/lib/client';
import { Project } from '@/utils/types';

export default async function Home() {
  async function getProject() {
    'use server';

    const projects: Project[] = await sanityFetch({
      query: `*[_type == "project"] {
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
      }`,
      tags: ['project'],
    });

    return projects;
  }

  const projects = await getProject();

  projects.sort((a, b) => a.order - b.order);

  return (
    <main className='flex flex-wrap lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 px-side pt-28 sm:pt-44 lg:pt-48 pb-28 sm:pb-36 lg:pb-40'>
      <section className='w-full mx-auto flex flex-col gap-y-4 items-center justify-center py-40 basis-full'>
        <InViewWrapper>
          <h1 className='uppercase text-7xl text-center underline-partial mx-auto'>
            Warp Studio
          </h1>
          <h2 className='uppercase text-4xl text-center max-w-3xl mt-6'>
            A creative studio specializing in video, photo and animation
            production.
          </h2>
        </InViewWrapper>
      </section>

      {projects.map((project: Project, index: number) => {
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
