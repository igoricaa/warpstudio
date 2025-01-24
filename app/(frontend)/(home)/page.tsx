import AnimatedText from '@/components/animated-text';
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
      }`,
      tags: ['project'],
    });

    return projects;
  }

  const projects = await getProject();

  return (
    <main className='flex flex-wrap lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 px-side pt-28 sm:pt-44 lg:pt-48 pb-28 sm:pb-36 lg:pb-40'>
      <div className='w-full lg:mx-auto'>
        <AnimatedText className='text-3xl sm:text-5xl lg:text-7xl mt-12 sm:mt-24 lg:mt-36'>
          Who are we?
        </AnimatedText>
        <AnimatedText className='text-xl sm:text-3xl lg:text-4xl mt-6 sm:mt-10'>
          Warp Studio is a dynamic creative studio specializing in video, photo
          and animation production. Established in 2018, our tight-knit team
          passionately transforms concepts into compelling visual stories.
        </AnimatedText>
        <AnimatedText className='text-xl sm:text-3xl lg:text-4xl mt-5 sm:mt-7 mb-16 sm:mb-20 lg:mb-28'>
          With expertise spanning TV commercials, music videos, event videos,
          corporate videos, and digital content, we tailor our services to meet
          diverse client needs. Our proficiency ranges from imaginative
          storytelling and budget optimization to strategic planning and
          seamless end-to-end project execution. At Warp Studio, we bring
          imagination to life, one frame at a time.
        </AnimatedText>
      </div>

      {projects.map((project: Project, index: number) => {
        const modifiedProject = {
          ...project,
          video: {
            ...project.video,
            aspectRatio: project.video.aspectRatio.replace(':', '/'),
          },
        };

        return <VideoPlayer key={index} project={modifiedProject} index={index} />;
      })}
    </main>
  );
}
