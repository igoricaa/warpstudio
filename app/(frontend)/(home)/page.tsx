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

// const gridItemsPositioning: { [key: number]: string } = {
//   0: 'col-span-8 col-start-3 row-span-2',
//   1: 'col-span-8 row-span-2 row-start-3',
//   2: 'col-span-4 col-start-9 row-start-4',
//   3: 'col-span-10 col-start-2 row-span-2 row-start-5',
//   4: 'col-span-5 row-span-3 row-start-7',
//   5: 'col-span-4 col-start-6 row-span-2 row-start-8',
//   6: 'col-span-8 col-start-3 row-span-2 row-start-10',
// };

const flexItemsPositioning: { [key: number]: string } = {
  0: 'w-8/12',
  1: 'w-8/12',
  2: 'w-3/12',
  3: 'w-10/12',
  4: 'w-5/12',
  5: 'w-4/12',
  6: 'w-10/12',
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
    // <main className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 auto-rows-fr px-side'>
    <main className='flex justify-center flex-wrap gap-10 auto-rows-fr px-side pt-40'>
      {projects.map((project: Project, index: number) => (
        <div
          key={index}
          className={`relative ${flexItemsPositioning[index]} h-full`}
        >
          <div className='absolute top-12 left-12 z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300'>
            <h2 className='text-white text-6xl font-bold'>{project.title}</h2>
          </div>
          <VideoPlayer project={project} index={index} />
        </div>
      ))}
    </main>
  );
}

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

{
  /* <MuxPlayer
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
          /> */
}
