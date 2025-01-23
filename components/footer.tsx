const Footer = () => {
  return (
    <footer className='px-side py-52 grid grid-cols-12 gap-x-4 gap-y-20'>
      <h1 className='col-span-12 text-5xl font-medium underline-partial'>Warp Studio</h1>
      <div className='col-span-6 w-4/6 max-w-[750px]'>
        <p className='text-2xl'>
          Warp Studio is a dynamic creative studio specializing in video, photo
          and animation production. Established in 2018, our tight-knit team
          passionately transforms concepts into compelling visual stories.
        </p>
        <a href='/contact' className='block text-2xl mt-8 underline-link'>
          Talk with us!
        </a>
      </div>
      <div className='col-span-4'>
        <h2 className='text-4xl font-medium mb-10'>Get in touch</h2>
        <a
          href='mailto:office@warpstudio.rs'
          className='text-2xl underline-link'
        >
          office@warpstudio.rs
        </a>
      </div>
      <div className='col-span-2'>
        <h2 className='text-4xl font-medium mb-10'>Follow us</h2>
        <div className='flex flex-col gap-2'>
          <a
            href='https://www.instagram.com/warp.studio/'
            target='_blank'
            className='text-2xl underline-link'
          >
            Instagram
          </a>
          <a
            href='https://vimeo.com/warpstudio'
            target='_blank'
            className='text-2xl underline-link'
          >
            Vimeo
          </a>
          <a
            href='https://warpstudio.passgallery.com/client'
            target='_blank'
            className='text-2xl underline-link'
          >
            Gallery
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
