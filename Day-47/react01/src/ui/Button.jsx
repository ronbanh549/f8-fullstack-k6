import classNames from "classnames";

function Button({
  first,
  primary,
  btnRes,
  secondary,
  children,
  padding,
  paddingSecond,
  btnSectionHeader,
  btnContact,
  ...rest
}) {
  const classes = classNames(
    rest.className,
    "align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg",
    {
      "py-3 px-6": padding,
      "py-2 px-4": paddingSecond,
      "text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20":
        first && padding,
      "bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none":
        primary,
      "relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 ml-auto inline-block lg:hidden":
        btnRes,
      "w-full px-4 md:w-[12rem]": btnSectionHeader && primary && padding,
      "w-full md:w-fit": btnContact && primary && padding,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, first, btnRes }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!first) +
      +Number(!!btnRes);

    if (count > 1) {
      return new Error("Only one of primary, secondary,... can be true");
    }
  },
};

export default Button;