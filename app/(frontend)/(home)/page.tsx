import VideoPlayer from '@/components/video-player';
import { sanityFetch } from '@/sanity/lib/client';
import MuxPlayer from '@mux/mux-player-react/lazy';

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
    <div className='flex items-center justify-center w-screen min-h-screen font-[family-name:var(--font-geist-sans)]'>
      {projects.map((project: Project, index: number) => (
        <div key={project._id}>
          <h1>{project.title}</h1>
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
      ))}
    </div>
  );
}
