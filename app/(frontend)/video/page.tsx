import VideosWrapper from '@/components/videos/videos-wrapper';
import { sanityFetch } from '@/sanity/lib/client';
import { Videos } from '@/utils/types';

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
    <main className='px-side pt-28 sm:pt-44 lg:pt-64 pb-28 sm:pb-36 lg:pb-40'>
      <VideosWrapper videos={videos} />
    </main>
  );
}
