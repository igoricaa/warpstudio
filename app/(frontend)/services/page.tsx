import { sanityFetch } from '@/sanity/lib/client';
import type { PhotographyProject, Services } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Services() {
  async function getServices() {
    'use server';

    const services: Services = await sanityFetch({
      query: `*[_type == "services"][0] {
        title,
        services[] {
          title,
          description
        },
        photoPortfolio {
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
          }
        },
      }`,
      tags: ['services'],
    });

    return services;
  }

  const services = await getServices();

  const { horizontalProjects, verticalProjects } =
    services.photoPortfolio.projects.reduce(
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
        {services.title}
      </h1>

      <section className='w-full flex flex-col items-center justify-center gap-y-8 sm:gap-y-10 lg:gap-y-12 mt-12 sm:mt-16 lg:mt-24 max-w-3xl mx-auto'>
        {services.services.map((service, index) => {
          return (
            <div key={index}>
              <h2 className='text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl underline-partial'>
                {service.title}
              </h2>
              <p className='text-base sm:text-lg lg:text-xl 3xl:text-2xl mt-5'>
                {service.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className='w-full flex flex-col lg:items-center justify-center mt-12 sm:mt-24 lg:mt-32'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl 3xl:text-5xl underline-partial'>
          {services.photoPortfolio.title}
        </h2>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 sm:mt-14 lg:mt-20'>
          {horizontalProjects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                project={project}
                className={`${
                  index === horizontalProjects.length - 1
                    ? '!col-span-full'
                    : '!col-span-1'
                }`}
              />
            );
          })}

          {verticalProjects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
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
        <h2 className='text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl absolute z-20 top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          {project.title}
        </h2>
        <div className='absolute z-10 top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300' />
      </Link>
    </article>
  );
};
