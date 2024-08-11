function Chat() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank">
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none !fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        type="button"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <img
          alt="Material Tailwind"
          loading="lazy"
          width="128"
          height="128"
          className="w-5 h-5"
          src="https://www.material-tailwind.com/favicon.png"
        />
        Made With Material Tailwind
      </button>
    </a>
  );
}

export default Chat;
