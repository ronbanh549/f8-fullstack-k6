function MySkillItem({ item }) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
      <div className="p-6 grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 p-2.5 text-white shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
            strokeWidth="2"
          >
            {item.d && (
              <path fillRule="evenodd" d={item.d} clipRule="evenodd"></path>
            )}
            {item.d1 && item.d2 && (
              <>
                <path fillRule="evenodd" d={item.d1} clipRule="evenodd"></path>
                <path d={item.d2}></path>
              </>
            )}
          </svg>
        </div>
        <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2">
          {item.title}
        </h5>
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit px-8 font-normal !text-gray-500">
          {item.content}
        </p>
      </div>
    </div>
  );
}

export default MySkillItem;
