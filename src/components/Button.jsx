const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor
          ? `${borderColor} ${textColor} ${backgroundColor}`
          : "bg-coral-red  text-white border-coral-red"
      } `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="iconURL"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
