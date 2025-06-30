function Button({
  children,
  type = "button",
  variants = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  variants?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      className={`py-2 text-base font-bold duration-500 rounded-full cursor-pointer px-7 outline-1 ${
        variants === "secondary"
          ? "text-primary"
          : "text-white hover:text-primary hover:bg-transparent bg-primary hover:outline-primary"
      } lato-font ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
