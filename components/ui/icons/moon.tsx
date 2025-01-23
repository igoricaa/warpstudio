const MoonIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    className={props.className}
    viewBox='0 0 24 24'
  >
    <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9'></path>
  </svg>
);

export default MoonIcon;
