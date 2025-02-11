import InViewWrapper from '@/components/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/client';
import type { Photography, PhotographyProject } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Photography() {
  async function getPhotography() {
    'use server';

    const photographyData: Photography = await sanityFetch({
      query: `*[_type == "photography"][0] {
        title,
        projects[] {
          title,
          galleryLink,
          coverImage {
            'url': asset->url,
            alt,
            'width': asset->metadata.dimensions.width,
            'height': asset->metadata.dimensions.height,
          }
        },
      }`,
      tags: ['photography'],
    });

    return photographyData;
  }

  const photographyData = await getPhotography();

  if (
    !photographyData ||
    !photographyData.projects ||
    photographyData.projects.length < 1
  ) {
    return (
      <section className='w-full h-screen flex flex-col items-center justify-center py-40'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl text-center'>
          No photography data found
        </h1>
      </section>
    );
  }

  const { horizontalProjects, verticalProjects } =
    photographyData.projects.reduce(
      (acc, project) => {
        if (project.coverImage.width / project.coverImage.height > 1) {
          acc.horizontalProjects.push(project);
        } else {
          acc.verticalProjects.push(project);
        }
        return acc;
      },
      { horizontalProjects: [], verticalProjects: [] } as {
        horizontalProjects: PhotographyProject[];
        verticalProjects: PhotographyProject[];
      }
    );

  return (
    <main className='px-side pt-32 sm:pt-44 lg:pt-56 pb-20 sm:pb-36 max-w-7xl mx-auto'>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl text-center'>
        {photographyData.title}
      </h1>

      <section className='w-full flex flex-col lg:items-center justify-center mt-12 sm:mt-24 lg:mt-32'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {horizontalProjects.map((project, index) => {
            return (
              <InViewWrapper
                key={index}
                className={`${
                  index === horizontalProjects.length - 1
                    ? '!col-span-full'
                    : '!col-span-1'
                }`}
              >
                <ProjectCard project={project} />
              </InViewWrapper>
            );
          })}

          {verticalProjects.map((project, index) => {
            return (
              <InViewWrapper key={index}>
                <ProjectCard project={project} />
              </InViewWrapper>
            );
          })}
        </div>
      </section>
    </main>
  );
}

const ProjectCard = ({
  project,
  className,
}: {
  project: PhotographyProject;
  className?: string;
}) => {
  const aspectRatio = `${project.coverImage.width}/${project.coverImage.height}`;

  return (
    <article
      className={`w-full h-full relative col-span-1 group overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <Link href={project.galleryLink} target='_blank'>
        <Image
          src={project.coverImage.url}
          alt={project.title}
          fill
          sizes='(max-width: 480px) 100vw, (max-width: 1024) 100vw, 520px'
          className={`object-cover group-hover:scale-110 transition-all duration-300`}
        />
        <h2 className='text-white text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl absolute z-20 top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          {project.title}
        </h2>
        <div className='absolute z-10 top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300' />
      </Link>
    </article>
  );
};
