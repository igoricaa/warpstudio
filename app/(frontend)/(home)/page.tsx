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
  };
};

const gridItemsPositioning: { [key: number]: string } = {
  0: 'col-span-full row-span-2 row-start-1 h-[400px]',
  1: 'col-span-1 md:col-span-2 row-span-2 row-start-3 h-[300px]',
  2: 'col-span-1 md:col-span-2 row-span-2 row-start-3 h-[300px]',
  3: 'col-span-2 md:col-span-3 row-span-2 row-start-5 h-[250px]',
  4: 'col-span-1 md:col-span-1 row-span-2 row-start-5 h-[250px]',
  5: 'col-span-full row-span-2 row-start-7 h-[350px]',
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
          'playbackId': video.asset->playbackId
        },
      }`,
      tags: ['project'],
    });

    return projects;
  }

  const projects = await getProject();

  return (
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-24">
    //   {[1, 2, 3, 4].map((index) => (
    //     <div key={index} className="relative w-full pt-[56.25%]">
    //       <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
    //         <source src={`/video-${index}.mp4`} type="video/mp4" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //   ))}
    // </div>

    // <div className='flex items-center justify-center w-screen min-h-screen font-[family-name:var(--font-geist-sans)]'>

    // <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-24'>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 pt-24 auto-rows-fr'>
      {[...projects, ...projects, ...projects, ...projects, ...projects].map(
        (project: Project, index: number) => (
          <div
            key={index}
            className={`relative ${gridItemsPositioning[index]} w-full h-full`}
          >
            <div className='absolute top-12 left-12 z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
              <h2 className='text-white text-6xl font-bold'>{project.title}</h2>
            </div>
            {/* <MuxPlayer
            playbackId={project.video.playbackId}
            minResolution='1080p'
            preload={[0, 1, 2].includes(index) ? 'auto' : 'none'}
            playsInline
            poster={project.image.url}
            metadata={{
              video_id: project._id,
              video_title: project.title,
            }}
            loading='page'
            style={{ aspectRatio: 16 / 9 }}
          /> */}

            <VideoPlayer project={project} index={index} />
          </div>
        )
      )}
    </div>
  );
}
