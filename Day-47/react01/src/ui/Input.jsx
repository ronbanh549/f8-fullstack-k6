function Input({ name, label, placeholder }) {
    return (
      <>
        <input
          placeholder={placeholder}
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-b placeholder-shown:border-blue-gray-200 text-sm px-px pt-5 pb-2 border-blue-gray-200 focus:border-gray-900"
          name={name}
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-2.5 text-sm peer-focus:text-sm after:content[' '] after:block after:w-full after:absolute after:-bottom-2.5 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:border-gray-900">
          {label}
        </label>
      </>
    );
  }
  
  export default Input;