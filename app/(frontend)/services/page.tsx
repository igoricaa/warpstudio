// import { sanityFetch } from '@/sanity/lib/client';
// import type { Services } from '@/utils/types';
// import Image, { getImageProps } from 'next/image';
// import Link from 'next/link';

// export default async function Services() {
//   async function getServices() {
//     'use server';

//     const services: Services = await sanityFetch({
//       query: `*[_type == "services"] {
//         services[] {
//           title,
//           description
//         },
//         photoPortfolio {
//           title,
//           projects[] {
//             title,
//             galleryLink,
//             coverImage {
//               desktopImage {
//                 url,
//                 alt
//               },
//               mobileImage {
//                 url,
//                 alt
//               }
//             }
//           }
//         },
//       }`,
//       tags: ['services'],
//     });

//     return services;
//   }

//   const services = await getServices();

//   return (
//     <main className='flex flex-wrap lg:gap-x-10 gap-y-4 sm:gap-y-8 lg:gap-y-28 px-side pt-28 sm:pt-44 lg:pt-48 pb-28 sm:pb-36 lg:pb-40'>
//       <h1 className='text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl pt-12 sm:pt-24 3xl:pt-36'>
//         {services.photoPortfolio.title}
//       </h1>

//       <section className='w-full flex flex-col items-center justify-center gap-y-10'>
//         {services.services.map((service, index) => {
//           return (
//             <div key={index}>
//               <h2 className='text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl'>
//                 {service.title}
//               </h2>
//               <p className='text-base sm:text-lg lg:text-xl 3xl:text-2xl'>
//                 {service.description}
//               </p>
//             </div>
//           );
//         })}
//       </section>

//       <section className='w-full flex flex-col items-center justify-center gap-y-10'>
//         <h2 className='text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl'>
//           {services.photoPortfolio.title}
//         </h2>

//         <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
//           {services.photoPortfolio.projects.map((project, index) => {
//             const common = {
//               alt: project.title,
//               sizes: '100vw',
//               fill: true,
//               priority: true,
//             };
//             const {
//               props: { srcSet: desktop },
//             } = getImageProps({
//               ...common,
//               src: project.coverImage.desktopImage.url || '',
//             });
//             const {
//               props: { srcSet: mobile, ...rest },
//             } = getImageProps({
//               ...common,
//               src: project.coverImage.mobileImage?.url || '',
//             });

//             return (
//               <article
//                 key={index}
//                 className='w-full h-full relative col-span-full group'
//               >
//                 <Link href={project.galleryLink} target='_blank'>
//                   {/* <Image
//                     src={project.coverImage.desktopImage.url}
//                     alt={project.coverImage.desktopImage.alt}
//                     fill
//                     className='object-cover'
//                   /> */}

//                   <picture
//                   // style={{
//                   //   position: 'absolute',
//                   //   width: '100vw',
//                   //   height: '100%',
//                   //   top: 0,
//                   //   left: 0,
//                   // }}
//                   >
//                     <source media='(min-width: 680px)' srcSet={desktop} />
//                     <source media='(max-width: 680px)' srcSet={mobile} />
//                     <img
//                       {...rest}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                       }}
//                       className='object-cover'
//                     />
//                   </picture>
//                   <h2 className='text-xl sm:text-3xl lg:text-3xl 3xl:text-4xl absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
//                     {project.title}
//                   </h2>
//                 </Link>
//               </article>
//             );
//           })}
//         </div>
//       </section>
//     </main>
//   );
// }


export default function Services() {
  return <div>Services</div>;
}
