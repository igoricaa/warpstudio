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
  0: 'w-9/12',
  1: 'w-8/12',
  2: 'w-3/12 self-end',
  3: 'w-10/12 mx-auto',
  4: 'w-5/12',
  5: 'w-4/12 self-end',
  6: 'w-10/12 ml-auto',
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
    <main className='flex flex-wrap gap-x-10 gap-y-28 auto-rows-fr px-side pt-48'>
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
            <div
              className={`${index === 0 && `${videosProps[index]} relative mx-auto`}`}
            >
              <div className='absolute top-9 left-9 z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
                <h2 className='text-white text-5xl font-medium'>
                  {project.title}
                </h2>
              </div>
              <VideoPlayer project={modifiedProject} index={index} />
            </div>

            {index === 0 && (
              <div>
                <AnimatedText className='text-7xl mt-36'>
                  Who are we?
                </AnimatedText>
                <AnimatedText className='text-4xl mt-10'>
                  Warp Studio is a dynamic creative studio specializing in
                  video, photo and animation production. Established in 2018,
                  our tight-knit team passionately transforms concepts into
                  compelling visual stories.
                </AnimatedText>
                <AnimatedText className='text-4xl mt-7 mb-28'>
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
