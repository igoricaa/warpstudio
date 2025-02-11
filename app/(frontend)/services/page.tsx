import InViewWrapper from '@/components/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/client';
import type { Services } from '@/utils/types';

export default async function Services() {
  async function getServices() {
    'use server';

    const services: Services = await sanityFetch({
      query: `*[_type == "services"][0] {
        title,
        services[] {
          title,
          description
        }
      }`,
      tags: ['services'],
    });

    return services;
  }

  const services = await getServices();

  return (
    <main className='px-side pt-32 sm:pt-44 lg:pt-56 pb-20 sm:pb-36 max-w-7xl mx-auto'>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl text-center'>
        {services.title}
      </h1>

      <section className='w-full flex flex-col items-center justify-center gap-y-8 sm:gap-y-10 lg:gap-y-12 mt-12 sm:mt-16 lg:mt-24 max-w-3xl mx-auto'>
        {services.services.map((service, index) => {
          return (
            <InViewWrapper key={index}>
              <h2 className='text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl underline-partial'>
                {service.title}
              </h2>
              <p className='text-base sm:text-lg lg:text-xl 3xl:text-2xl mt-5'>
                {service.description}
              </p>
            </InViewWrapper>
          );
        })}
      </section>
    </main>
  );
}
