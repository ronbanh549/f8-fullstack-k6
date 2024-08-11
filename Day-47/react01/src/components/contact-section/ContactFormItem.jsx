function ContactFormItem({ name }) {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex items-center cursor-pointer p-3 rounded-full"
        htmlFor=":r0:"
      >
        <input
          className="peer relative appearance-none w-5 h-5 border rounded-full border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
          id=":r0:"
          type="radio"
          // checked
          name="type"
        />
        <span className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
      <label
        className="text-gray-700 font-light select-none cursor-pointer mt-px"
        htmlFor=":r0:"
      >
        {name}
      </label>
    </div>
  );
}

export default ContactFormItem;
