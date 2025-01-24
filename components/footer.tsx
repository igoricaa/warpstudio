const Footer = () => {
  return (
    <footer className='px-side py-20 sm:py-28 lg:py-32 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-4 gap-y-8 sm:gap-y-16 lg:gap-y-20 border-t border-black/30'>
      <h1 className='order-1 col-span-full text-3xl sm:text-4xl lg:text-5xl font-medium underline-partial'>
        Warp Studio
      </h1>
      <div className='order-3 sm:order-2 col-span-full sm:col-span-3 lg:col-span-3'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 lg:mb-10'>
          Get in touch
        </h2>
        <a
          href='mailto:lazar@warpstudio.rs'
          className='text-lg lg:text-2xl underline-link'
        >
          lazar@warpstudio.rs
        </a>
        <a
          href='/contact'
          className='block text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 underline-link'
        >
          Talk with us!
        </a>
      </div>
      <div className='order-4 sm:order-3 col-span-full sm:col-span-4 lg:col-span-3'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 lg:mb-10'>
          Follow us
        </h2>
        <div className='flex flex-col gap-1 sm:gap-2'>
          <a
            href='https://www.instagram.com/warp.studio/'
            target='_blank'
            className='text-lg lg:text-2xl underline-link'
          >
            Instagram
          </a>
          <a
            href='https://vimeo.com/warpstudio'
            target='_blank'
            className='text-lg lg:text-2xl underline-link'
          >
            Vimeo
          </a>
          <a
            href='https://warpstudio.passgallery.com/client'
            target='_blank'
            className='text-lg lg:text-2xl underline-link'
          >
            Gallery
          </a>
        </div>
      </div>
      <div className='order-2 sm:order-4 col-span-full sm:col-span-6 lg:w-4/6 lg:max-w-[750px]'>
        <p className='text-xl lg:text-2xl'>
          Warp Studio is a dynamic creative studio specializing in video, photo
          and animation production. Established in 2018, our tight-knit team
          passionately transforms concepts into compelling visual stories.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
