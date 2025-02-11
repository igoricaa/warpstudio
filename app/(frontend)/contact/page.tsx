import { ContactForm } from '@/components/contact-form';
import InViewWrapper from '@/components/inview-wrapper';

const Contact = async () => {
  return (
    <main className='max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-x-16 px-side pt-28 sm:pt-44 lg:pt-48 pb-10 sm:pb-36 lg:pb-40'>
      <InViewWrapper className='order-1 w-full basis-full mb-10 lg:mb-20'>
        <h1 className='text-4xl lg:text-5xl font-medium underline-partial'>
          How can we help?
        </h1>
        <p className='text-lg sm:text-xl mt-7'>
          Need help with your project? We&apos;re here to assist you.
        </p>
      </InViewWrapper>
      <div className='order-3 lg:order-2 mt-16 lg:mt-0'>
        <InViewWrapper>
          <h2 className='text-2xl lg:text-3xl font-medium mb-2 sm:mb-3 lg:mb-4'>
            Get in touch with us
          </h2>
          <a
            href='mailto:lazar@warpstudio.rs'
            className='text-base lg:text-xl underline-link'
          >
            lazar@warpstudio.rs
          </a>
        </InViewWrapper>
        <InViewWrapper className='mt-1 sm:mt-2'>
          <div className='flex flex-col gap-1 sm:gap-2'>
            <a
              href='https://www.instagram.com/warp.studio/'
              target='_blank'
              className='text-base lg:text-xl underline-link'
            >
              Instagram
            </a>
            <a
              href='https://vimeo.com/warpstudio'
              target='_blank'
              className='text-base lg:text-xl underline-link'
            >
              Vimeo
            </a>
          </div>
        </InViewWrapper>
      </div>
      <InViewWrapper className='order-2 lg:order-3 lg:mt-0 w-full lg:max-w-xl'>
        <ContactForm />
      </InViewWrapper>
    </main>
  );
};

export default Contact;
