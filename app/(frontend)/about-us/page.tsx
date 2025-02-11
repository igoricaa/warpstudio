import AnimatedText from '@/components/animated-text';
import InViewWrapper from '@/components/inview-wrapper';
import { sanityFetch } from '@/sanity/lib/client';
import type { AboutUs } from '@/utils/types';
import Image from 'next/image';

export default async function AboutUs() {
  async function getAboutUs() {
    'use server';

    const aboutUs: AboutUs = await sanityFetch({
      query: `*[_type == "about-us"][0] {
        title,
        aboutUsText {
          title,
          text[]
        },
        logos[]{
          'url': asset->url,
          alt,
          'width': asset->metadata.dimensions.width,
          'height': asset->metadata.dimensions.height,
        }
      }`,
      tags: ['aboutUs'],
    });

    return aboutUs;
  }

  const aboutUs = await getAboutUs();

  return (
    <main className='flex flex-wrap pt-32 sm:pt-44 lg:pt-56 pb-8 sm:pb-36 lg:pb-20'>
      <div className='w-full lg:mx-auto px-side '>
        <InViewWrapper>
          <AnimatedText className='text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl'>
            {aboutUs.aboutUsText.title}
          </AnimatedText>
        </InViewWrapper>
        {aboutUs.aboutUsText.text.map((text: string, index: number) => {
          return (
            <InViewWrapper key={index}>
              <AnimatedText
                key={index}
                className={`text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl ${index === 0 ? 'mt-6 sm:mt-10' : 'mt-5 sm:mt-7'} `}
              >
                {text}
              </AnimatedText>
            </InViewWrapper>
          );
        })}
      </div>

      <section className='w-full flex-col items-center justify-center overflow-hidden mt-24 sm:mt-32 lg:mt-44'>
        <InViewWrapper>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl text-center'>
            Clients
          </h2>
        </InViewWrapper>

        <div className='flex items-center justify-center gap-x-10 w-fit hover:pause animate-slide mt-16 sm:mt-24 lg:mt-28'>
          {[
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
            ...aboutUs.logos,
          ].map((logo: any, index: number) => {
            const aspectRatio = `${logo.width}/${logo.height}`;

            return (
              <div
                className={`relative w-24 sm:w-32 opacitySiblings`}
                key={index}
                style={{ aspectRatio: `${aspectRatio}` }}
              >
                <Image
                  src={logo.url}
                  alt={logo.alt}
                  fill
                  sizes='(max-width: 480px) 96px, 128px'
                  className='object-cover'
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
