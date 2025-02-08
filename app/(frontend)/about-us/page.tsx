import AnimatedText from '@/components/animated-text';
import ScrollDown from '@/components/scroll-down';
import { sanityFetch } from '@/sanity/lib/client';
import type { AboutUs } from '@/utils/types';
import Image from 'next/image';

export default async function AboutUs() {
  async function getAboutUs() {
    'use server';

    const aboutUs: any = await sanityFetch({
      query: `*[_type == "aboutUs"][0] {
        title,
        aboutUsText {
          title,
          text[]
        },
        logos[]{
          'url': asset->url,
          alt
        }
      }`,
      tags: ['aboutUs'],
    });

    return aboutUs;
  }

  const aboutUs = await getAboutUs();
  console.log(aboutUs);

  return (
    <main className='flex flex-wrap lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 px-side pt-28 sm:pt-44 lg:pt-48 pb-28 sm:pb-36 lg:pb-40'>
      <div className='w-full lg:mx-auto'>
        <AnimatedText className='text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl mt-12 sm:mt-24 lg:mt-0 3xl:mt-36'>
          {aboutUs.aboutUsText.title}
        </AnimatedText>
        {aboutUs.aboutUsText.text.map((text: string, index: number) => {
          return (
            <AnimatedText
              key={index}
              className={`text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl ${index === 0 ? 'mt-6 sm:mt-10' : 'mt-5 sm:mt-7'} `}
            >
              {text}
            </AnimatedText>
          );
        })}
      </div>

      <div className='w-full flex flex-col items-center justify-center mb-28 lg:mb-28 mt-16 sm:mt-20 lg:mt-[-40px]'>
        <ScrollDown />
      </div>

      {/* <section className='w-full flex items-center justify-center gap-x-10'>
        {aboutUs.logos.map((logo: any, index: number) => {
          return (
            <Image
              key={index}
              src={logo.url}
              alt={logo.alt}
              width={100}
              height={100}
              className='object-cover'
            />
          );
        })}
      </section> */}
    </main>
  );
}
