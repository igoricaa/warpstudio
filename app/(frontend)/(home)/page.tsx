import AnimatedText from '@/components/animated-text';
import VideoPlayer from '@/components/video-player';
import { sanityFetch } from '@/sanity/lib/client';

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

const videosProps: { [key: number]: string } = {
  0: 'w-full lg:w-9/12',
  1: 'w-full lg:w-8/12',
  2: 'w-full lg:w-3/12 lg:self-end',
  3: 'w-full lg:w-10/12 lg:mx-auto',
  4: 'w-full lg:w-5/12',
  5: 'w-full lg:w-4/12 lg:self-end',
  6: 'w-full\ lg:w-10/12 lg:ml-auto',
};

export default async function Home() {
  async function getProject() {
    'use server';

    const projects: Project[] = await sanityFetch({
      query: `*[_type == "project"] {
        _id,
        title,
        image {
          'url': asset->url,
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
    <main className='flex flex-wrap lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 auto-rows-fr px-side pt-28 sm:pt-44 lg:pt-48'>
      {projects.map((project: Project, index: number) => {
        const modifiedProject = {
          ...project,
          video: {
            ...project.video,
            aspectRatio: project.video.aspectRatio.replace(':', '/'),
          },
        };

        return (
          <div
            key={index}
            className={`${index === 0 ? 'w-full' : videosProps[index]} relative h-full group`}
          >
            <div className='w-full aspect-video bg-black'>test</div>
            <VideoPlayer
              project={modifiedProject}
              index={index}
              containerClassName={`${videosProps[index]}`}
            />

            {index === 0 && (
              <div>
                <AnimatedText className='text-3xl sm:text-5xl lg:text-7xl mt-12 sm:mt-24 lg:mt-36'>
                  Who are we?
                </AnimatedText>
                <AnimatedText className='text-xl sm:text-3xl lg:text-4xl mt-6 sm:mt-10'>
                  Warp Studio is a dynamic creative studio specializing in
                  video, photo and animation production. Established in 2018,
                  our tight-knit team passionately transforms concepts into
                  compelling visual stories.
                </AnimatedText>
                <AnimatedText className='text-xl sm:text-3xl lg:text-4xl mt-5 sm:mt-7 mb-16 sm:mb-20 lg:mb-28'>
                  With expertise spanning TV commercials, music videos, event
                  videos, corporate videos, and digital content, we tailor our
                  services to meet diverse client needs. Our proficiency ranges
                  from imaginative storytelling and budget optimization to
                  strategic planning and seamless end-to-end project execution.
                  At Warp Studio, we bring imagination to life, one frame at a
                  time.
                </AnimatedText>
              </div>
            )}
          </div>
        );
      })}
    </main>
  );
}
