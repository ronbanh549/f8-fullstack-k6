function FooterItem({ title }) {
  return (
    <li>
      <a
        href="#"
        className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors"
      >
        {title}
      </a>
    </li>
  );
}

export default FooterItem;
