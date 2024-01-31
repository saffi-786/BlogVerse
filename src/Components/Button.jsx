function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  hover = "hover:bg-blue-700",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} ${hover}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
