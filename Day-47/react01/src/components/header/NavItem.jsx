function NavItem({ image, title }) {
  return (
    <li>
      <a
        href="#"
        target="_self"
        className="antialiased font-sans text-base leading-relaxed flex items-center gap-2 font-medium text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path fillRule="evenodd" d={image} clipRule="evenodd"></path>
        </svg>
        {title}
      </a>
    </li>
  );
}

export default NavItem;
