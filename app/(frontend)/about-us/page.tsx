import AnimatedText from '@/components/animated-text';
import { sanityFetch } from '@/sanity/lib/client';
import type { AboutUs } from '@/utils/types';
import Image from 'next/image';

// export default async function AboutUs() {
//   async function getAboutUs() {
//     'use server';

//     const aboutUs: AboutUs = await sanityFetch({
//       query: `*[_type == "about-us"][1] {
//         title,
//         aboutUsText {
//           title,
//           text[]
//         },
//         logos[]{
//           'url': asset->url,
//           alt,
//           'width': asset->metadata.dimensions.width,
//           'height': asset->metadata.dimensions.height,
//         }
//       }`,
//       tags: ['aboutUs'],
//     });

//     return aboutUs;
//   }

//   const aboutUs = await getAboutUs();

//   return (
//     <main className='flex flex-wrap pt-28 sm:pt-44 lg:pt-48 pb-20 sm:pb-36 lg:pb-20'>
//       <div className='w-full lg:mx-auto px-side '>
//         <AnimatedText className='text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl mt-12 sm:mt-24 lg:mt-0 3xl:mt-36'>
//           {aboutUs.aboutUsText.title}
//         </AnimatedText>
//         {aboutUs.aboutUsText.text.map((text: string, index: number) => {
//           return (
//             <AnimatedText
//               key={index}
//               className={`text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl ${index === 0 ? 'mt-6 sm:mt-10' : 'mt-5 sm:mt-7'} `}
//             >
//               {text}
//             </AnimatedText>
//           );
//         })}
//       </div>

//       <section className='w-full flex items-center justify-center overflow-hidden mt-24 sm:mt-32 lg:mt-40'>
//         <div className='flex items-center justify-center gap-x-10 w-fit hover:pause animate-slide'>
//           {[
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//             ...aboutUs.logos,
//           ].map((logo: any, index: number) => {
//             const aspectRatio = `${logo.width}/${logo.height}`;

//             return (
//               <div
//                 className={`relative w-24 sm:w-32 opacitySiblings`}
//                 key={index}
//                 style={{ aspectRatio: `${aspectRatio}` }}
//               >
//                 <Image
//                   src={logo.url}
//                   alt={logo.alt}
//                   fill
//                   className='object-cover'
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </main>
//   );
// }

export default function AboutUs() {
  return <div>About Us</div>;
}
